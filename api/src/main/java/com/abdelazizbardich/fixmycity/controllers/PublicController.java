package com.abdelazizbardich.fixmycity.controllers;

import com.abdelazizbardich.fixmycity.models.Report;
import com.abdelazizbardich.fixmycity.services.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/public")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class PublicController {

    @Autowired
    private ReportService reportService;

    @GetMapping("/reports")
    public ResponseEntity<java.util.List<Report>> getReports(){
        List<Report> reports = reportService.getAll();
        return ResponseEntity.ok().body(reports);
    }
    @GetMapping("/reports/{id}")
    public ResponseEntity<Report> getReport(@PathVariable(name = "id") Long id){
        Report report = reportService.findById(id).get();
        return ResponseEntity.ok().body(report);
    }
}
