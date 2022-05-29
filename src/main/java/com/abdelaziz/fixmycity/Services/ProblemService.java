package com.abdelaziz.fixmycity.Services;

import com.abdelaziz.fixmycity.Models.Problem;
import com.abdelaziz.fixmycity.Repositories.ProblemRepository;
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

    public Boolean delete(Problem problem){
        try{
            problemRepository.delete(problem);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
