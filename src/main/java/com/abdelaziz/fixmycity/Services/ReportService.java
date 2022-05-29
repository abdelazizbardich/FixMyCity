package com.abdelaziz.fixmycity.Services;

import com.abdelaziz.fixmycity.Models.Report;
import com.abdelaziz.fixmycity.Repositories.ReportRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReportService {

    private ReportRepository reportRepository;

    public ReportService(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    public List<Report> getAll(){
        return reportRepository.findAll();
    }

    public Optional<Report> findById(Long id){
        return reportRepository.findById(id);
    }

    public Report addOrUpdate(Report report){
        return reportRepository.save(report);
    }

    public Boolean delete(Report report){
        try{
            reportRepository.delete(report); return true;
        }catch (Exception e){
            return false;
        }
    }
}
