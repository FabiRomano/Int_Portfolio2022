package com.portfolio.FabiolaRomano.Service;
import com.portfolio.FabiolaRomano.Entity.Persona;
import com.portfolio.FabiolaRomano.Exception.UserNotFoundException;
import com.portfolio.FabiolaRomano.Repository.PersonaRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional

public class PersonaService {
  
   private final PersonaRepo personaRepo;
   
    @Autowired
    public PersonaService (PersonaRepo personaRepo){
    
       this.personaRepo = personaRepo;
    }
   
    public Persona addPersona(Persona persona){
    
        return personaRepo.save(persona);
    }
    
    public List<Persona> traerPersona(){
    
        return personaRepo.findAll();
    }
    
    
    public Persona editarPersona(Persona persona){
    
        return personaRepo.save(persona);
     
    }
    
    public void eliminarPersona(long id){
    
        personaRepo.deleteById(id);
    } 
    
    public Persona buscarPersonaPorId (long id){
    
        return personaRepo.findById(id).orElseThrow(() ->new UserNotFoundException("Usuario no encontrado"));
    }

 
}
