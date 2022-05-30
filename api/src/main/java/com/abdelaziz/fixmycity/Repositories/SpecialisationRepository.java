package com.abdelaziz.fixmycity.Repositories;

import com.abdelaziz.fixmycity.Models.Specialisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialisationRepository extends JpaRepository<Specialisation,Long> {
}
