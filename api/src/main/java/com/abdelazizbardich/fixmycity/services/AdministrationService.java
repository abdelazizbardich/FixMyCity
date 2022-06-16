package com.abdelazizbardich.fixmycity.services;

import com.abdelazizbardich.fixmycity.models.Administration;
import com.abdelazizbardich.fixmycity.repositories.AdministrationRepository;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministrationService {

    private AdministrationRepository administrationRepository;
//    @Autowired
//    private PasswordEncoder passwordEncoder;

    public AdministrationService(AdministrationRepository administrationRepository) {
        this.administrationRepository = administrationRepository;
    }

    public List<Administration> getAll(){
        return administrationRepository.findAll();
    }

    public Administration findById(Long id){
        return administrationRepository.findById(id).get();
    }

    public Administration addOrUpdate(Administration administration){
//        if(administration.getId() == null){
//            administration.setPassword(passwordEncoder.encode(administration.getPassword()));
//        }
        return administrationRepository.save(administration);
    }

    public Boolean delete(Long id){
        try{
            administrationRepository.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
    }

}
