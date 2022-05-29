package com.abdelaziz.fixmycity.Repositories;

import com.abdelaziz.fixmycity.Models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
}
