package com.abdelazizbardich.fixmycity.repositories;

import com.abdelazizbardich.fixmycity.models.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem,Long> {
}
