package com.abdelaziz.fixmycity.Services;

import com.abdelaziz.fixmycity.Models.Role;
import com.abdelaziz.fixmycity.Repositories.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    private RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<Role> getAll(){
        return roleRepository.findAll();
    }

    public Optional<Role> findById(Long id){
        return roleRepository.findById(id);
    }

    public Role addOrUpdate(Role role){
        return roleRepository.save(role);
    }

    public Boolean delete(Role role){
        try{
            roleRepository.delete(role);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
