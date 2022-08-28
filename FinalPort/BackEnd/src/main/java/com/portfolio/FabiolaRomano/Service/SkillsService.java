package com.portfolio.FabiolaRomano.Service;

import com.portfolio.FabiolaRomano.Entity.Skills;
import com.portfolio.FabiolaRomano.Repository.SkillsRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class SkillsService {
    
    private final SkillsRepo skillsRepo;
    
    
    @Autowired
    public SkillsService (SkillsRepo skillsRepo){
    
        this.skillsRepo = skillsRepo;
    }
    
     public Skills addSkills(Skills skills){
    
        return skillsRepo.save(skills);
    }
    
    public List<Skills> traerSkills(){
    
        return skillsRepo.findAll();
    }
    
    
    public Skills editarSkills(Skills skills){
    
        return skillsRepo.save(skills);
     
    }
    
    public void eliminarSkills(long id){
    
        skillsRepo.deleteById(id);
    } 
}
