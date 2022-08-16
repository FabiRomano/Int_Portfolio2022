package com.portfolio.FabiolaRomano.Service;

import com.portfolio.FabiolaRomano.Entity.Hys;
import com.portfolio.FabiolaRomano.Repository.HysRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class HysService {
    
    private final HysRepo hysRepo;
    
    
    @Autowired
    public HysService (HysRepo hysRepo){
    
        this.hysRepo = hysRepo;
    }
    
     public Hys addHys(Hys hys){
    
        return hysRepo.save(hys);
    }
    
    public List<Hys> traerHys(){
    
        return hysRepo.findAll();
    }
    
    
    public Hys editarHys(Hys hys){
    
        return hysRepo.save(hys);
     
    }
    
    public void eliminarHys(long id){
    
        hysRepo.deleteById(id);
    } 
}
