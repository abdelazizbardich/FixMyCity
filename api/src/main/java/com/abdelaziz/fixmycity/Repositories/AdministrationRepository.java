package com.abdelaziz.fixmycity.Repositories;

import com.abdelaziz.fixmycity.Models.Administration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrationRepository extends JpaRepository<Administration,Long> {

}
