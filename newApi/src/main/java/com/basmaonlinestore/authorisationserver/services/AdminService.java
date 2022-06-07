package com.basmaonlinestore.authorisationserver.services;

import com.basmaonlinestore.authorisationserver.models.Admin;
import com.basmaonlinestore.authorisationserver.models.User;
import com.basmaonlinestore.authorisationserver.repositories.AdminRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class AdminService {

    private AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public User findByUsername(String login){
        try{
            return adminRepository.findByLogin(login).get();
        }catch (NoSuchElementException e){
            return null;
        }
    }

    public List<Admin> getAll(){
        return adminRepository.findAll();
    }

    public Optional<Admin> findById(Long id){
        return adminRepository.findById(id);
    }

    public Admin addOrUpdate(Admin admin){
        return adminRepository.save(admin);
    }

    public Boolean delete(Admin admin){
        try{
            adminRepository.delete(admin);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
