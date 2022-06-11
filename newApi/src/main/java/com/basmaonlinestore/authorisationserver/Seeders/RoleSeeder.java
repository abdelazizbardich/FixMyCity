package com.basmaonlinestore.authorisationserver.Seeders;

import com.basmaonlinestore.authorisationserver.models.Role;
import com.basmaonlinestore.authorisationserver.services.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class RoleSeeder {

    private  RoleService roleService;
    public void Seed(){
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
    }

}
