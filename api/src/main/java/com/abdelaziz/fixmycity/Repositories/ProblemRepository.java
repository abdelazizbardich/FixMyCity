package com.abdelaziz.fixmycity.Repositories;

import com.abdelaziz.fixmycity.Models.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem,Long> {
}
