package com.basmaonlinestore.authorisationserver.controllers;

import com.basmaonlinestore.authorisationserver.models.Admin;
import com.basmaonlinestore.authorisationserver.services.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
@Secured("ROLE_ADMIN")
public class AdminController {

    private AdminService adminService;
    private PasswordEncoder passwordEncoder;

    public AdminController(AdminService adminService, PasswordEncoder passwordEncoder) {
        this.adminService = adminService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("")
    public ResponseEntity<List<Admin>> getAll(){
        List<Admin> admins = adminService.getAll();
        return ResponseEntity.ok().body(admins);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(adminService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Admin> add(@RequestBody Admin admin){
        admin.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.ok().body(adminService.addOrUpdate(admin));
    }

    @PutMapping("")
    public ResponseEntity<Admin> update(@RequestBody Admin admin){
        Admin oldAdmin = adminService.findById(admin.getUserId());
        if(admin.getPassword() == null){
            admin.setPassword(oldAdmin.getPassword());
        }else {
            admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        }
        admin.setRole(oldAdmin.getRole());
        admin.setLogin(oldAdmin.getLogin());
        return ResponseEntity.ok().body(adminService.addOrUpdate(admin));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(adminService.delete(id));
    }
}
