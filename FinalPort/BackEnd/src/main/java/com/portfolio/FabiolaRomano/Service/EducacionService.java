package com.portfolio.FabiolaRomano.Service;

import com.portfolio.FabiolaRomano.Entity.Educacion;
import com.portfolio.FabiolaRomano.Exception.UserNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.portfolio.FabiolaRomano.Repository.EducacionRepo;

@Service
@Transactional
public class EducacionService {
    
    private final EducacionRepo educacionRepo;
    
    
    @Autowired
    public EducacionService (EducacionRepo educacionRepo){
    
        this.educacionRepo= educacionRepo;
    }
    
    
    public Educacion addEducacion(Educacion educacion){
    
        return educacionRepo.save(educacion);
    }
    
    public List<Educacion> traerEducacion(){
    
        return educacionRepo.findAll();
    }
    
    
    public Educacion editarEducacion(Educacion educacion){
    
        return educacionRepo.save(educacion);
     
    }
    
    public void eliminarEducacion(long id){
    
        educacionRepo.deleteById(id);
    } 
    
    public Educacion buscarEducacion(Long id) {
        return educacionRepo.findById(id).orElseThrow(()->new UserNotFoundException("educacion no encontrada"));
    }
}
