package com.abdelaziz.fixmycity.Repositories;

import com.abdelaziz.fixmycity.Models.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<Photo,Long> {
}
