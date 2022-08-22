package com.portfolio.FabiolaRomano.Controller;

import com.portfolio.FabiolaRomano.Entity.Hys;
import com.portfolio.FabiolaRomano.Service.HysService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hys")
public class HysController {
    
          private final HysService hysService;

    public HysController(HysService hysService) {
        this.hysService = hysService;
    }
    
    @GetMapping("/all")
    public ResponseEntity <List<Hys>> obtenerHys(){
        
        List<Hys> hys = hysService.traerHys();
        
        return new ResponseEntity<>(hys, HttpStatus.OK);
       
     }
    
    @PutMapping("/update")
    
    public ResponseEntity<Hys> editarHys(@RequestBody Hys hys){
    
       Hys updateHys= hysService.editarHys(hys);
       
       return new ResponseEntity<>(updateHys,HttpStatus.OK);
}
 
    @PutMapping("/add")
    public ResponseEntity<Hys> crearHys(@RequestBody Hys hys){
        
        Hys nuevoHys = hysService.addHys(hys);
          return new ResponseEntity<>(nuevoHys,HttpStatus.CREATED);
    }
    
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> borrarHys(@PathVariable ("id") Long id){
        hysService.eliminarHys(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    
}
