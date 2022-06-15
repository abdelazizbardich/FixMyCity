package com.basmaonlinestore.authorisationserver.repositories;

import com.basmaonlinestore.authorisationserver.models.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem,Long> {
}
