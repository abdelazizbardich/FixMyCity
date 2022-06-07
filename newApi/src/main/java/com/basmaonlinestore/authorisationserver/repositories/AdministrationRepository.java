package com.basmaonlinestore.authorisationserver.repositories;

import com.basmaonlinestore.authorisationserver.models.Administration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrationRepository extends JpaRepository<Administration,Long> {

}
