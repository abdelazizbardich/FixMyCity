package com.abdelaziz.fixmycity.Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class TokenManager {

    private final String CLAIMS_SUBJECT = "sub";
    private final String CLAIMS_CREATED = "created";

    @Value("${auth.expiration}")
    private Long TOKEN_VALIDITY = 604800L;

    @Value("${auth.secret}")
    private String TOKEN_SECRET;

    public String generateToken(UserDetails userDetails){
        // claims // expiration // sign // compact
        Map<String, Object> claims = new HashMap<>();
        claims.put(CLAIMS_SUBJECT,userDetails.getUsername());
        claims.put(CLAIMS_CREATED,new Date());
        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(generateExpiration())
                .signWith(SignatureAlgorithm.HS512,TOKEN_SECRET)
                .compact();
    }

    public String getUsername(String token){
        try {
            Claims claims = getClaims(token);
            return claims.getSubject();
        }catch (Exception e){
            return null;
        }

    }
    public boolean isValide(String token,UserDetails user){
        String username = getUsername(token);
        return (username.equals(user.getUsername()) && !isExpired(token));
    }

    public boolean isExpired(String token){
        Date expiration = getClaims(token).getExpiration();
        return expiration.before(new Date());
    }

    private Date generateExpiration() {
        return new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000);
    }

    private Claims getClaims(String token){
        Claims claims;
        try {
            claims = Jwts.parser().setSigningKey(TOKEN_SECRET)
                    .parseClaimsJws(token)
                    .getBody();
        }catch (Exception e){
            claims = null;
        }
        System.out.println(claims);
        return claims;
    }

}
