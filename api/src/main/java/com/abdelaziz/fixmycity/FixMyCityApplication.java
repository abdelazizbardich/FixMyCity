package com.abdelaziz.fixmycity;

import com.abdelaziz.fixmycity.Models.Role;
import com.abdelaziz.fixmycity.Repositories.RoleRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.naming.Context;

@SpringBootApplication
public class FixMyCityApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(FixMyCityApplication.class, args);
        RoleRepository roleRepository = context.getBean(RoleRepository.class);
        roleRepository.save(new Role(null,"ROLE_ADMIN",null));
    }


}
