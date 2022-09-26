package com.portfolio.FabiolaRomano.Controller;

import com.portfolio.FabiolaRomano.Entity.Educacion;
import com.portfolio.FabiolaRomano.Service.EducacionService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/educacion")
public class EducacionController {
    
        private final EducacionService educacionService;

    public EducacionController(EducacionService educacionService) {
        this.educacionService = educacionService;
    }
    
    @GetMapping("/todo")
    public ResponseEntity <List<Educacion>> obtenerEducacion(){
        
        List<Educacion> educacion = educacionService.traerEducacion();
        
        return new ResponseEntity<>(educacion, HttpStatus.OK);
       
     }
    
    @PutMapping("/editar")
    
    public ResponseEntity<Educacion> editarEducacion(@RequestBody Educacion educacion){
    
       Educacion updateEducacion= educacionService.editarEducacion(educacion);
       
       return new ResponseEntity<>(updateEducacion,HttpStatus.OK);
}
 
    @PutMapping("/agregar")
    public ResponseEntity<Educacion> crearEducacion(@RequestBody Educacion educacion){
        
        Educacion nuevaEducacion = educacionService.addEducacion(educacion);
          return new ResponseEntity<>(nuevaEducacion,HttpStatus.CREATED);
    }
    
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> borrarEducacion(@PathVariable ("id") Long id){
       educacionService.eliminarEducacion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    
    @GetMapping("/buscar/{id}")
    public ResponseEntity<Educacion> buscarEducacion(@PathVariable("id") Long id){
        Educacion educacionBuscada=educacionService.buscarEducacion(id);
        return new ResponseEntity<>(educacionBuscada,HttpStatus.OK);
    }
    
}
