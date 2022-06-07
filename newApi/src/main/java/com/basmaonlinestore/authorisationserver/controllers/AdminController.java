package com.basmaonlinestore.authorisationserver.controllers;

import com.basmaonlinestore.authorisationserver.models.Admin;
import com.basmaonlinestore.authorisationserver.services.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")

@Secured("ROLE_ADMIN")
public class AdminController {

    private AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("")
    public ResponseEntity<List<Admin>> getAll(){
        List<Admin> admins = adminService.getAll();
        return ResponseEntity.ok().body(admins);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Admin>> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(adminService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Admin> add(@RequestBody Admin admin){
        return ResponseEntity.ok().body(adminService.addOrUpdate(admin));
    }

    @PutMapping("")
    public ResponseEntity<Admin> update(@RequestBody Admin admin){
        return ResponseEntity.ok().body(adminService.addOrUpdate(admin));
    }

    @DeleteMapping("")
    public ResponseEntity<Boolean> delete(@RequestBody Admin admin){
        return ResponseEntity.ok().body(adminService.delete(admin));
    }
}
