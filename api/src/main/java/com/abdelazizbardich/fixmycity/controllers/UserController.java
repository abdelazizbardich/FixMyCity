package com.abdelazizbardich.fixmycity.controllers;

import com.abdelazizbardich.fixmycity.services.UserService;
import com.abdelazizbardich.fixmycity.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
// @RolesAllowed("ROLE_ADMIN")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getAll(){
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public User find(@PathVariable("id") Long id){
        return userService.get(id);
    }

    @PutMapping("/{id}")
    public User update(@RequestBody User user,@PathVariable("id") Long id){
        user.setUserId(id);
        return userService.update(user);
    }

    @PostMapping("/")
    public User store(@RequestBody User user){
        user.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return userService.add(user);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable(name = "id") Long id){
        return userService.delete(id);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user){
        return userService.login(user);
    }

    @PostMapping("/password/reset")
    public User resetPassword(@RequestBody User user){
        return userService.resetPassword(user);
    }
}
