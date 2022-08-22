package com.portfolio.FabiolaRomano.Controller;

import com.portfolio.FabiolaRomano.Entity.Estudios;
import com.portfolio.FabiolaRomano.Service.EstudiosService;
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
@RequestMapping("/estudios")
public class EstudiosController {
    
        private final EstudiosService estudiosService;

    public EstudiosController(EstudiosService estudiosService) {
        this.estudiosService = estudiosService;
    }
    
    @GetMapping("/all")
    public ResponseEntity <List<Estudios>> obtenerEstudios(){
        
        List<Estudios> estudios = estudiosService.traerEstudios();
        
        return new ResponseEntity<>(estudios, HttpStatus.OK);
       
     }
    
    @PutMapping("/update")
    
    public ResponseEntity<Estudios> editarEstudios(@RequestBody Estudios estudios){
    
       Estudios updateEstudios= estudiosService.editarEstudios(estudios);
       
       return new ResponseEntity<>(updateEstudios,HttpStatus.OK);
}
 
    @PutMapping("/add")
    public ResponseEntity<Estudios> crearEstudios(@RequestBody Estudios estudios){
        
        Estudios nuevoEstudios = estudiosService.addEstudios(estudios);
          return new ResponseEntity<>(nuevoEstudios,HttpStatus.CREATED);
    }
    
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> borrarEstudios(@PathVariable ("id") Long id){
        estudiosService.eliminarEstudios(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
