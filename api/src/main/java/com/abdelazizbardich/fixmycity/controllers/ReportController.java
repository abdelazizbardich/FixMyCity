package com.abdelazizbardich.fixmycity.controllers;

import com.abdelazizbardich.fixmycity.models.Report;
import com.abdelazizbardich.fixmycity.services.ReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/report")
@CrossOrigin(origins = "*")
 @Secured({"ROLE_ADMIN","ROLE_ADMINISTRATION","ROLE_USER"})
public class ReportController {

    private ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping("")
    public ResponseEntity<List<Report>> getAll(){
        List<Report> reports = reportService.getAll();
        return ResponseEntity.ok().body(reports);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Report>> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(reportService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Report> add(@RequestBody Report report){
        report.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.ok().body(reportService.addOrUpdate(report));
    }

    @PutMapping("")
    @Secured({"ROLE_ADMIN","ROLE_ADMINISTRATION"})
    public ResponseEntity<Report> update(@RequestBody Report report){
        return ResponseEntity.ok().body(reportService.addOrUpdate(report));
    }

    @DeleteMapping("/{id}")
    @Secured({"ROLE_ADMIN","ROLE_ADMINISTRATION"})
    public ResponseEntity<Boolean> delete(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(reportService.delete(id));
    }
}
