package com.abdelaziz.fixmycity.Services;

import com.abdelaziz.fixmycity.Models.Specialisation;
import com.abdelaziz.fixmycity.Repositories.SpecialisationRepository;
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

    public Boolean delete(Specialisation specialisation){
        try{
            specialisationRepository.delete(specialisation);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
