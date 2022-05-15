package com.abdelaziz.fixmycity.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {

    @GetMapping("/home")
    public String home(){
        return "Home";
    }

    @GetMapping("/admin")
    public String adminHome(){
        return "Admin Home";
    }

}
