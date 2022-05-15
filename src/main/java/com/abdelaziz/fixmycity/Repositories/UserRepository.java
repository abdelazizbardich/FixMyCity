package com.abdelaziz.fixmycity.Repositories;

import com.abdelaziz.fixmycity.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    public User findByUsername(String username);
}
