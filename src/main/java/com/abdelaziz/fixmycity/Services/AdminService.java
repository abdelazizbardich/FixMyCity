package com.abdelaziz.fixmycity.Services;

import com.abdelaziz.fixmycity.Models.Admin;
import com.abdelaziz.fixmycity.Repositories.AdminRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    private AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
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
