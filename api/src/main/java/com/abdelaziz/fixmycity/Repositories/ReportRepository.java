package com.abdelaziz.fixmycity.Repositories;

import com.abdelaziz.fixmycity.Models.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report,Long> {
}
