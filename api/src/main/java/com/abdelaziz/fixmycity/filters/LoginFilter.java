package com.abdelaziz.fixmycity.filters;

//import com.auth0.jwt.JWT;
//import com.auth0.jwt.JWTVerifier;
//import com.auth0.jwt.algorithms.Algorithm;
//import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.http.HttpHeaders;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collection;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;

public class LoginFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        if(request.getServletPath().equals("/api/v1/login") || request.getServletPath().equals("/api/v1/register")){
//            filterChain.doFilter(request,response);
//        }else {
//            String authHeader = response.getHeader(AUTHORIZATION);
//            System.out.println("===> "+authHeader);
//            if(authHeader != null){
//                System.err.println("qsdqsd zqsd sq d sqd===");
//                try {
//                    String token = authHeader.substring("Bearer ".length());
//                    Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
//                    JWTVerifier verifier = JWT.require(algorithm).build();
//                    DecodedJWT decodedJWT = verifier.verify(token);
//                    String username = decodedJWT.getSubject();
//                    String[] roles = decodedJWT.getClaim("roles").asArray(String.class);
//                    Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//                    stream(roles).forEach(role -> { authorities.add(new SimpleGrantedAuthority(role));});
//                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,null,authorities);
//                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//                    filterChain.doFilter(request,response);
//                }catch (Exception e){
//                    System.err.println(e);
//                }
//            }else {
//                filterChain.doFilter(request,response);
//            }
                filterChain.doFilter(request,response);

        }
    }
