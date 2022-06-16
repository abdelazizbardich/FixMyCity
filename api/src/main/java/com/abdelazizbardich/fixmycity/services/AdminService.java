package com.abdelazizbardich.fixmycity.services;

import com.abdelazizbardich.fixmycity.models.Admin;
import com.abdelazizbardich.fixmycity.models.User;
import com.abdelazizbardich.fixmycity.repositories.AdminRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

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

    public Admin findById(Long id){
        return adminRepository.findById(id).get();
    }

    public Admin addOrUpdate(Admin admin){
        return adminRepository.save(admin);
    }

    public Boolean delete(Long id){
        try{
            adminRepository.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
