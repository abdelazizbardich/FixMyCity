package com.basmaonlinestore.authorisationserver.controllers;

import com.basmaonlinestore.authorisationserver.models.Role;
import com.basmaonlinestore.authorisationserver.services.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/role")
@Secured("ROLE_ADMIN")
public class RoleController {

    private RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("")
    public ResponseEntity<List<Role>> getAll(){
        List<Role> roles = roleService.getAll();
        return ResponseEntity.ok().body(roles);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Role> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(roleService.get(id));
    }

    @PostMapping("")
    public ResponseEntity<Role> add(@RequestBody Role role){
        return ResponseEntity.ok().body(roleService.add(role));
    }

    @PutMapping("")
    public ResponseEntity<Role> update(@RequestBody Role role){
        return ResponseEntity.ok().body(roleService.update(role));
    }

    @DeleteMapping("")
    public ResponseEntity<Boolean> delete(Role role){
        return ResponseEntity.ok().body(roleService.delete(role));
    }
}
