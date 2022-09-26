package com.portfolio.FabiolaRomano.Controller;

import com.portfolio.FabiolaRomano.Entity.Experiencia;
import com.portfolio.FabiolaRomano.Service.ExperienciaService;
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
@RequestMapping("/experiencia")
public class ExperienciaController {
          private final ExperienciaService experienciaService;

    public ExperienciaController(ExperienciaService experienciaService) {
        this.experienciaService = experienciaService;
    }
    
    @GetMapping("/todo")
    public ResponseEntity <List<Experiencia>> obtenerExperiencia(){
        
        List<Experiencia> experiencia = experienciaService.traerExperiencia();
        
        return new ResponseEntity<>(experiencia, HttpStatus.OK);
       
     }
    
    @PutMapping("/editar")
    
    public ResponseEntity<Experiencia> editarExperiencia(@RequestBody Experiencia experiencia){
    
       Experiencia updateExperiencia= experienciaService.editarExperiencia( experiencia);
       
       return new ResponseEntity<>(updateExperiencia,HttpStatus.OK);
}
 
    @PutMapping("/agregar")
    public ResponseEntity<Experiencia> crearExperiencia(@RequestBody  Experiencia experiencia){
        
       Experiencia nuevoExperiencia = experienciaService.addExperiencia(experiencia);
          return new ResponseEntity<>(nuevoExperiencia,HttpStatus.CREATED);
    }
    
    @DeleteMapping("borrar/{id}")
    public ResponseEntity<?> borrarExperiencia(@PathVariable ("id") Long id){
        experienciaService.eliminarExperiencia(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
     @GetMapping("/buscar/{id}")
    public ResponseEntity<Experiencia> buscarExperiencia(@PathVariable("id") Long id){
        Experiencia experienciaBuscada=experienciaService.buscarExperiencia(id);
        return new ResponseEntity<>(experienciaBuscada,HttpStatus.OK);
    }
    
}
