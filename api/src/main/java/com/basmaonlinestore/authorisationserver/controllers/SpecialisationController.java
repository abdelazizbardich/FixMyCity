package com.basmaonlinestore.authorisationserver.controllers;

import com.basmaonlinestore.authorisationserver.models.Specialisation;
import com.basmaonlinestore.authorisationserver.services.SpecialisationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/specialisation")
@CrossOrigin(origins = "*")
@Secured({"ROLE_ADMIN"})
public class SpecialisationController {

    private SpecialisationService specialisationService;

    public SpecialisationController(SpecialisationService specialisationService) {
        this.specialisationService = specialisationService;
    }

    @GetMapping("")
    public ResponseEntity<List<Specialisation>> getAll(){
        List<Specialisation> specialisations = specialisationService.getAll();
        return ResponseEntity.ok().body(specialisations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Specialisation>> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(specialisationService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Specialisation> add(@RequestBody Specialisation specialisation){
        specialisation.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.ok().body(specialisationService.addOrUpdate(specialisation));
    }

    @PutMapping("")
    public ResponseEntity<Specialisation> update(@RequestBody Specialisation specialisation){
        return ResponseEntity.ok().body(specialisationService.addOrUpdate(specialisation));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(specialisationService.delete(id));
    }
}
