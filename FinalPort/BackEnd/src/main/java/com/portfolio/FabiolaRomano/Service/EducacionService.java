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
public class EducacionService implements IEducacionService{
    
    private final EducacionRepo educacionRepo;
    
    
    @Autowired
    public EducacionService (EducacionRepo educacionRepo){
    
        this.educacionRepo= educacionRepo;
    }
    
    
    @Override
    public Educacion agregarEducacion(Educacion educacion){
    
        return educacionRepo.save(educacion);
    }
    
    @Override
    public List<Educacion> verEducacion(){
    
        return educacionRepo.findAll();
    }
    
    
    @Override
    public Educacion editarEducacion(Educacion educacion){
    
        return educacionRepo.save(educacion);
     
    }
     
    
    @Override
    public Educacion buscarEducacion(Long id) {
       return educacionRepo.findById(id).orElseThrow(()->new UserNotFoundException("educacion no encontrada"));
    }

    @Override
    public void eliminarEducacion(Long id) {
      educacionRepo.deleteById(id);
    }
}
