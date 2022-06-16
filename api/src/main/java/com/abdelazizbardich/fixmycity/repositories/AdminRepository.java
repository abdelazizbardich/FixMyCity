package com.abdelazizbardich.fixmycity.repositories;

import com.abdelazizbardich.fixmycity.models.Admin;
import com.abdelazizbardich.fixmycity.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long> {

    Optional<User> findByLogin(String login);

}
