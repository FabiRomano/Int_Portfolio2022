package com.portfolio.FabiolaRomano.Service;

import com.portfolio.FabiolaRomano.Entity.Estudios;
import com.portfolio.FabiolaRomano.Repository.EstudiosRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EstudiosService {
    
    private final EstudiosRepo estudiosRepo;
    
    
    @Autowired
    public EstudiosService (EstudiosRepo estudiosRepo){
    
        this.estudiosRepo = estudiosRepo;
    }
    
    
    public Estudios addEstudios(Estudios estudios){
    
        return estudiosRepo.save(estudios);
    }
    
    public List<Estudios> traerEstudios(){
    
        return estudiosRepo.findAll();
    }
    
    
    public Estudios editarEstudios(Estudios estudios){
    
        return estudiosRepo.save(estudios);
     
    }
    
    public void eliminarEstudios(long id){
    
        estudiosRepo.deleteById(id);
    } 
}
