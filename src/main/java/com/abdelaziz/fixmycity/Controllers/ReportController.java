package com.abdelaziz.fixmycity.Controllers;

import com.abdelaziz.fixmycity.Models.Report;
import com.abdelaziz.fixmycity.Services.ReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/report")
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
        return ResponseEntity.ok().body(reportService.addOrUpdate(report));
    }

    @PutMapping("")
    public ResponseEntity<Report> update(@RequestBody Report report){
        return ResponseEntity.ok().body(reportService.addOrUpdate(report));
    }

    @DeleteMapping("")
    public ResponseEntity<Boolean> delete(Report report){
        return ResponseEntity.ok().body(reportService.delete(report));
    }
}
