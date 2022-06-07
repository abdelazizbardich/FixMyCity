package com.basmaonlinestore.authorisationserver.repositories;

import com.basmaonlinestore.authorisationserver.models.Specialisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialisationRepository extends JpaRepository<Specialisation,Long> {
}
