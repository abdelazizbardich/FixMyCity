package com.basmaonlinestore.authorisationserver;

import com.basmaonlinestore.authorisationserver.models.Admin;
import com.basmaonlinestore.authorisationserver.models.Role;
import com.basmaonlinestore.authorisationserver.services.AdminService;
import com.basmaonlinestore.authorisationserver.services.RoleService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.Basic;
import java.sql.Timestamp;

@SpringBootApplication
public class MyWebApplication {

    private PasswordEncoder passwordEncoder;
    public static void main(String[] args) {
        ApplicationContext context =  SpringApplication.run(MyWebApplication.class, args);

    }
}