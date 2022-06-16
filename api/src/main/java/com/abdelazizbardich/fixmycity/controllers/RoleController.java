package com.abdelazizbardich.fixmycity.controllers;

import com.abdelazizbardich.fixmycity.models.Role;
import com.abdelazizbardich.fixmycity.services.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/role")
@CrossOrigin(origins = "*")
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(roleService.delete(id));
    }
}
