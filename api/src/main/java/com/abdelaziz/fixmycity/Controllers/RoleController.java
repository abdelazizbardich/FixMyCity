package com.abdelaziz.fixmycity.Controllers;

import com.abdelaziz.fixmycity.Models.Role;
import com.abdelaziz.fixmycity.Services.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/role")
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
        return ResponseEntity.ok().body(roleService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Role> add(@RequestBody Role role){
        return ResponseEntity.ok().body(roleService.addOrUpdate(role));
    }

    @PutMapping("")
    public ResponseEntity<Role> update(@RequestBody Role role){
        return ResponseEntity.ok().body(roleService.addOrUpdate(role));
    }

    @DeleteMapping("")
    public ResponseEntity<Boolean> delete(Role role){
        return ResponseEntity.ok().body(roleService.delete(role));
    }
}
