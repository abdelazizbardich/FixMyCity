package com.basmaonlinestore.authorisationserver.Seeders;

import com.basmaonlinestore.authorisationserver.models.Admin;
import com.basmaonlinestore.authorisationserver.services.AdminService;
import com.basmaonlinestore.authorisationserver.services.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
@RequiredArgsConstructor
@Component
public class AdministrationSeeder {

    private final AdminService adminService;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;

    public void Seed(){
        // Create an admin if not exist
        if(adminService.findByUsername("admin") == null){
            Admin admin = new Admin();
            admin.setRole(roleService.getByName("ROLE_ADMIN"));
            admin.setLogin("admin");
            admin.setPassword(passwordEncoder.encode("pass1234"));
            admin.setCreatedAt (new Timestamp(System.currentTimeMillis()));
            admin.setEmail ("admin@email.com");
            admin.setFirstName ("John");
            admin.setIsActive (true);
            admin.setLastName ("Doe");
            adminService.addOrUpdate(admin);
        }
    }
}
