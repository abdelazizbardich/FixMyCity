//package com.abdelaziz.fixmycity.Controllers;
//
//import com.abdelaziz.fixmycity.Models.Role;
//import com.abdelaziz.fixmycity.Models.User;
//import com.abdelaziz.fixmycity.Services.RoleService;
//import com.abdelaziz.fixmycity.Services.UserService;
////import com.auth0.jwt.JWT;
////import com.auth0.jwt.algorithms.Algorithm;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import javax.servlet.http.HttpServletRequest;
//import java.nio.charset.StandardCharsets;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/v1/auth")
//public class AuthController {
//
//    private final UserService userService;
//    private final RoleService roleService;
//
//    public AuthController(UserService userService, RoleService roleService) {
//        this.userService = userService;
//        this.roleService = roleService;
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<Map> Login(@RequestBody User user,HttpServletRequest request) throws Exception{
//        user = userService.findByUsername(user.getUsername());
//        if(user == null){
//            Map<String, String> errors = new HashMap<>();
//            errors.put("error","User not found!");
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errors);
//        }
//        return ResponseEntity.ok().body(generateUserTokens(user,request));
//    }
//
//    @PostMapping("/register")
//    public ResponseEntity<Map> register(@RequestBody User user){
//        Role role = roleService.findByName("ROLE_ADMIN");
//        user.setRole(role);
//        Map<String,User> response = new HashMap<>();
//        response.put("user",userService.addOrUpdate(user));
//        return ResponseEntity.ok().body(response);
//    }
//
//    // Generate user Token
//    private Map<String,String> generateUserTokens(User user,HttpServletRequest request) throws Exception{
////        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes(StandardCharsets.UTF_8));
////        String ACCESS_TOKEN = JWT.create()
////                .withSubject(user.getUsername())
////                .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
////                .withIssuer(request.getRequestURI().toString())
////                .withClaim("roles",user.getRole().getName())
////                .sign(algorithm);
////        String REFRESH_TOKEN = JWT.create()
////                .withSubject(user.getUsername())
////                .withExpiresAt(new Date(System.currentTimeMillis() + 30*24*60*60*1000))
////                .withIssuer(request.getRequestURI().toString())
////                .sign(algorithm);
//        Map response = new HashMap();
//        response.put("access_token","ACCESS_TOKEN");
//        response.put("refresh_token","REFRESH_TOKEN");
//        return response;
//    }
//}
