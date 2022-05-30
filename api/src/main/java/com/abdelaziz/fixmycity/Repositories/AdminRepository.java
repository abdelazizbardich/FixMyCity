package com.abdelaziz.fixmycity.Repositories;

import com.abdelaziz.fixmycity.Models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long> {

}
