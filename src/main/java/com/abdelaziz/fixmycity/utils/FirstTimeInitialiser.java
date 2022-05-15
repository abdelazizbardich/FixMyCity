package com.abdelaziz.fixmycity.utils;

import com.abdelaziz.fixmycity.Models.User;
import com.abdelaziz.fixmycity.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class FirstTimeInitialiser implements CommandLineRunner {
    @Autowired
    private UserService userService;
    @Override
    public void run(String... args) throws Exception {
        if (userService.findAll().isEmpty()){
            System.out.println("No user found! creating one");
            User user = new User("aziz","pass1234");
            userService.saveUser(user);
        }else {
            System.out.println("A user found!");
            System.out.println(userService.findAll().get(0));
        }
    }
}
