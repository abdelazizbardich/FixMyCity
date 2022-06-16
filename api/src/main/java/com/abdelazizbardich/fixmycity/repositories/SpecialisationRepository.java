package com.abdelazizbardich.fixmycity.repositories;

import com.abdelazizbardich.fixmycity.models.Specialisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialisationRepository extends JpaRepository<Specialisation,Long> {
}
