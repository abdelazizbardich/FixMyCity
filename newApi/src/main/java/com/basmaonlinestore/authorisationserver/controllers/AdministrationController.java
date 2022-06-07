package com.basmaonlinestore.authorisationserver.controllers;

import com.basmaonlinestore.authorisationserver.models.Administration;
import com.basmaonlinestore.authorisationserver.services.AdministrationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/administration")
@Secured("ROLE_ADMIN")
public class AdministrationController {

    private AdministrationService administrationService;

    public AdministrationController(AdministrationService administrationService) {
        this.administrationService = administrationService;
    }

    @GetMapping("")
    public ResponseEntity<List<Administration>> getAll(){
        List<Administration> administrations = administrationService.getAll();
        return ResponseEntity.ok().body(administrations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Administration>> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(administrationService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Administration> add(@RequestBody Administration administration){
        return ResponseEntity.ok().body(administrationService.addOrUpdate(administration));
    }

    @PutMapping("")
    public ResponseEntity<Administration> update(@RequestBody Administration administration){
        return ResponseEntity.ok().body(administrationService.addOrUpdate(administration));
    }

    @DeleteMapping("")
    public ResponseEntity<Boolean> delete(Administration administration){
        return ResponseEntity.ok().body(administrationService.delete(administration));
    }
}
