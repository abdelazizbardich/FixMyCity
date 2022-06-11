package com.basmaonlinestore.authorisationserver.services;

import com.basmaonlinestore.authorisationserver.models.Problem;
import com.basmaonlinestore.authorisationserver.repositories.ProblemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProblemService {

    private ProblemRepository problemRepository;

    public ProblemService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    public List<Problem> getAll(){
        return problemRepository.findAll();
    }

    public Optional<Problem> findById(Long id){
        return problemRepository.findById(id);
    }

    public Problem addOrUpdate(Problem problem){
        return problemRepository.save(problem);
    }

    public Boolean delete(Long id){
        try{
            problemRepository.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
