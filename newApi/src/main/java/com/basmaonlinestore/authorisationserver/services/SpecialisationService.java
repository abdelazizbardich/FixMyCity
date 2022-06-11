package com.basmaonlinestore.authorisationserver.services;

import com.basmaonlinestore.authorisationserver.models.Specialisation;
import com.basmaonlinestore.authorisationserver.repositories.SpecialisationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecialisationService {

    private SpecialisationRepository specialisationRepository;

    public SpecialisationService(SpecialisationRepository specialisationRepository) {
        this.specialisationRepository = specialisationRepository;
    }

    public List<Specialisation> getAll(){
        return specialisationRepository.findAll();
    }

    public Optional<Specialisation> findById(Long id){
        return specialisationRepository.findById(id);
    }

    public Specialisation addOrUpdate(Specialisation specialisation){
        return specialisationRepository.save(specialisation);
    }

    public Boolean delete(Long id){
        try{
            specialisationRepository.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
