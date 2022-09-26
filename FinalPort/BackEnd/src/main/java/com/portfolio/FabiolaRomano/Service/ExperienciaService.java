package com.portfolio.FabiolaRomano.Service;

import com.portfolio.FabiolaRomano.Entity.Experiencia;
import com.portfolio.FabiolaRomano.Exception.UserNotFoundException;
import com.portfolio.FabiolaRomano.Repository.ExperienciaRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ExperienciaService {
 
    private final ExperienciaRepo experienciaRepo;
    
    @Autowired
    public ExperienciaService (ExperienciaRepo experienciaRepo){
    
        this.experienciaRepo = experienciaRepo;
    }
    
     public Experiencia addExperiencia (Experiencia experiencia){
    
        return experienciaRepo.save(experiencia);
    }
    
    public List<Experiencia> traerExperiencia(){
    
        return experienciaRepo.findAll();
    }
    
    
    public Experiencia editarExperiencia(Experiencia experiencia){
    
        return experienciaRepo.save(experiencia);
     
    }
    
    public void eliminarExperiencia(long id){
    
        experienciaRepo.deleteById(id);
    } 
    
    public Experiencia buscarExperiencia(Long id) {
        return experienciaRepo.findById(id).orElseThrow(()->new UserNotFoundException("experiencia no encontrada"));
    }
    
}
