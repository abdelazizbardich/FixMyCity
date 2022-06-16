package com.abdelazizbardich.fixmycity.repositories;

import com.abdelazizbardich.fixmycity.models.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report,Long> {
}
