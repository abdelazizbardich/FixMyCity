package com.abdelaziz.fixmycity.Controllers;

import com.abdelaziz.fixmycity.Models.Problem;
import com.abdelaziz.fixmycity.Services.ProblemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/problem")
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
    public ResponseEntity<Problem> add(@RequestBody Problem problem){
        return ResponseEntity.ok().body(problemService.addOrUpdate(problem));
    }

    @PutMapping("")
    public ResponseEntity<Problem> update(@RequestBody Problem problem){
        return ResponseEntity.ok().body(problemService.addOrUpdate(problem));
    }

    @DeleteMapping("")
    public ResponseEntity<Boolean> delete(Problem problem){
        return ResponseEntity.ok().body(problemService.delete(problem));
    }
}
