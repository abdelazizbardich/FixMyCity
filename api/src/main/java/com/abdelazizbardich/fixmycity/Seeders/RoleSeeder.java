package com.abdelazizbardich.fixmycity.Seeders;

import com.abdelazizbardich.fixmycity.models.Role;
import com.abdelazizbardich.fixmycity.services.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class RoleSeeder {

    @Autowired
    private  RoleService roleService;

    public void Seed(){
//        if(roleService.getByName("ROLE_ADMIN") == null){
            Role role = new Role();
            role.setName("ROLE_ADMIN");
            roleService.add(role);
//        }
        // Create a USER role if not exist
//        if(roleService.getByName("ROLE_USER") == null){
            role = new Role();
            role.setName("ROLE_USER");
            roleService.add(role);
//        }
        // Create an ADMINISTRATION role if not exist
//        if(roleService.getByName("ROLE_ADMINISTRATION") == null){
            role = new Role();
            role.setName("ROLE_ADMINISTRATION");
            roleService.add(role);
//        }
    }

}
