package com.abdelaziz.fixmycity.Controllers;

import com.abdelaziz.fixmycity.Models.Specialisation;
import com.abdelaziz.fixmycity.Services.SpecialisationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/specialisation")
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
        return ResponseEntity.ok().body(specialisationService.addOrUpdate(specialisation));
    }

    @PutMapping("")
    public ResponseEntity<Specialisation> update(@RequestBody Specialisation specialisation){
        return ResponseEntity.ok().body(specialisationService.addOrUpdate(specialisation));
    }

    @DeleteMapping("")
    public ResponseEntity<Boolean> delete(Specialisation specialisation){
        return ResponseEntity.ok().body(specialisationService.delete(specialisation));
    }
}
