package com.basmaonlinestore.authorisationserver.repositories;

import com.basmaonlinestore.authorisationserver.models.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<Photo,Long> {
}
