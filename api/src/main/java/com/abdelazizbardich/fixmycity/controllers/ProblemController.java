package com.abdelazizbardich.fixmycity.controllers;

import com.abdelazizbardich.fixmycity.models.Problem;
import com.abdelazizbardich.fixmycity.services.ProblemService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/problem")
@CrossOrigin(origins = "*")
 @Secured({"ROLE_ADMIN","ROLE_ADMINISTRATION","ROLE_USER"})
public class ProblemController {

    private ProblemService problemService;

    public ProblemController(ProblemService problemService) {
        this.problemService = problemService;
    }

    @GetMapping("")
    public ResponseEntity<List<Problem>> getAll(){
        List<Problem> problems = problemService.getAll();
        return ResponseEntity.ok().body(problems);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Problem>> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(problemService.findById(id));
    }

    @PostMapping("")
    @Secured({"ROLE_ADMIN","ROLE_ADMINISTRATION"})
    public ResponseEntity<Problem> add(@RequestBody Problem problem){
        problem.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.ok().body(problemService.addOrUpdate(problem));
    }

    @PutMapping("")
    @Secured({"ROLE_ADMIN","ROLE_ADMINISTRATION"})
    public ResponseEntity<Problem> update(@RequestBody Problem problem){
        return ResponseEntity.ok().body(problemService.addOrUpdate(problem));
    }

    @DeleteMapping("/{id}")
    @Secured({"ROLE_ADMIN","ROLE_ADMINISTRATION"})
    public ResponseEntity<Boolean> delete(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(problemService.delete(id));
    }
}
