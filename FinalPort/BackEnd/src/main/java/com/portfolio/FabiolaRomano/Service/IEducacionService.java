package com.portfolio.FabiolaRomano.Service;

import com.portfolio.FabiolaRomano.Entity.Educacion;
import java.util.List;


public interface IEducacionService {
    
    
     public List<Educacion> verEducacion();
    
    public Educacion agregarEducacion (Educacion educacion);
    
    public void eliminarEducacion (Long id);
        
    public Educacion editarEducacion (Educacion educacion);
    
    public Educacion buscarEducacion(Long id);
    
}
    

