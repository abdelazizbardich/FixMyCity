package com.basmaonlinestore.authorisationserver.controllers;

import com.basmaonlinestore.authorisationserver.models.Administration;
import com.basmaonlinestore.authorisationserver.services.AdministrationService;
import com.basmaonlinestore.authorisationserver.services.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/administration")
@CrossOrigin(origins = "*")
@Secured("ROLE_ADMIN")
public class AdministrationController {

    private AdministrationService administrationService;
    private RoleService roleService;
    private PasswordEncoder passwordEncoder;

    public AdministrationController(AdministrationService administrationService, RoleService roleService, PasswordEncoder passwordEncoder) {
        this.administrationService = administrationService;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("")
    public ResponseEntity<List<Administration>> getAll(){
        List<Administration> administrations = administrationService.getAll();
        return ResponseEntity.ok().body(administrations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Administration> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(administrationService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Administration> add(@RequestBody Administration administration){
        administration.setRole(roleService.getByName("ROLE_ADMINISTRATION"));
        administration.setPassword(passwordEncoder.encode(administration.getPassword()));
        return ResponseEntity.ok().body(administrationService.addOrUpdate(administration));
    }

    @PutMapping("")
    public ResponseEntity<Administration> update(@RequestBody Administration administration){
        Administration oldAdministration = administrationService.findById(administration.getUserId());
        if(administration.getPassword() == null){
            administration.setPassword(oldAdministration.getPassword());
        }else {
            administration.setPassword(passwordEncoder.encode(administration.getPassword()));
        }
        administration.setRole(oldAdministration.getRole());
        administration.setLogin(oldAdministration.getLogin());
        return ResponseEntity.ok().body(administrationService.addOrUpdate(administration));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(administrationService.delete(id));
    }
}
