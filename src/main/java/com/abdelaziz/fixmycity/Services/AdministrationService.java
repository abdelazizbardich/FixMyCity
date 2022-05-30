package com.abdelaziz.fixmycity.Services;

import com.abdelaziz.fixmycity.Models.Administration;
import com.abdelaziz.fixmycity.Repositories.AdministrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdministrationService {

    private AdministrationRepository administrationRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public AdministrationService(AdministrationRepository administrationRepository) {
        this.administrationRepository = administrationRepository;
    }

    public List<Administration> getAll(){
        return administrationRepository.findAll();
    }

    public Optional<Administration> findById(Long id){
        return administrationRepository.findById(id);
    }

    public Administration addOrUpdate(Administration administration){
        if(administration.getId() == null){
            administration.setPassword(passwordEncoder.encode(administration.getPassword()));
        }
        return administrationRepository.save(administration);
    }

    public Boolean delete(Administration administration){
        try{
            administrationRepository.delete(administration);
            return true;
        }catch (Exception e){
            return false;
        }
    }

}
