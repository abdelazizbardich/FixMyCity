package com.basmaonlinestore.authorisationserver;

import com.basmaonlinestore.authorisationserver.models.Admin;
import com.basmaonlinestore.authorisationserver.models.Role;
import com.basmaonlinestore.authorisationserver.models.User;
import com.basmaonlinestore.authorisationserver.services.AdminService;
import com.basmaonlinestore.authorisationserver.services.RoleService;
import com.basmaonlinestore.authorisationserver.services.UDService;
import com.basmaonlinestore.authorisationserver.services.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.sql.Timestamp;

@SpringBootApplication
public class MyWebApplication {

    public static void main(String[] args) {
        ApplicationContext context =  SpringApplication.run(MyWebApplication.class, args);

        // Create an ADMIN role if not exist
        RoleService roleService = context.getBean(RoleService.class);
        if(roleService.getByName("ROLE_ADMIN") == null){
            Role role = new Role();
            role.setName("ROLE_ADMIN");
            roleService.add(role);
        }
        // Create a USER role if not exist
        if(roleService.getByName("ROLE_USER") == null){
            Role role = new Role();
            role.setName("ROLE_USER");
            roleService.add(role);
        }
        // Create an ADMINISTRATION role if not exist
        if(roleService.getByName("ROLE_ADMINISTRATION") == null){
            Role role = new Role();
            role.setName("ROLE_ADMINISTRATION");
            roleService.add(role);
        }

        // Create an admin if not exist
        AdminService adminService = context.getBean(AdminService.class);
        if(adminService.findByUsername("admin") == null){
            Admin admin = new Admin();
            admin.setRole(roleService.getByName("ROLE_ADMIN"));
            admin.setLogin("admin");
            admin.setPassword(context.getBean(PasswordEncoder.class).encode("pass1234"));
            admin.setCreatedAt (new Timestamp(System.currentTimeMillis()));
            admin.setEmail ("admin@email.com");
            admin.setFirstName ("John");
            admin.setIsActive (true);
            admin.setLastName ("Doe");
            adminService.addOrUpdate(admin);
        }

    }
}