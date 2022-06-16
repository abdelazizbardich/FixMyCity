package com.abdelazizbardich.fixmycity.repositories;

import com.abdelazizbardich.fixmycity.models.Administration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrationRepository extends JpaRepository<Administration,Long> {

}
