package com.portfolio.FabiolaRomano.Controller;

import com.portfolio.FabiolaRomano.Entity.Skills;
import com.portfolio.FabiolaRomano.Service.SkillsService;
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
@RequestMapping("/skills")
public class SkillsController {
    
          private final SkillsService skillsService;

    public SkillsController(SkillsService skillsService) {
        this.skillsService = skillsService;
    }
    
    @GetMapping("/todo")
    public ResponseEntity <List<Skills>> obtenerSkills(){
        
        List<Skills> skills = skillsService.traerSkills();
        
        return new ResponseEntity<>(skills, HttpStatus.OK);
       
     }
    
    @PutMapping("/editar")
    
    public ResponseEntity<Skills> editarSkills(@RequestBody Skills skills){
    
      Skills updateSkills = skillsService.editarSkills(skills);
       
       return new ResponseEntity<>(updateSkills,HttpStatus.OK);
}
 
    @PutMapping("/agregar")
    public ResponseEntity<Skills> crearSkills(@RequestBody Skills skills){
        
        Skills nuevoSkills = skillsService.addSkills(skills);
          return new ResponseEntity<>(nuevoSkills,HttpStatus.CREATED);
    }
    
    @DeleteMapping("eliminar/{id}")
    public ResponseEntity<?> borrarSkills(@PathVariable ("id") Long id){
        skillsService.eliminarSkills(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
     @GetMapping("/buscar/{id}")
    public ResponseEntity<Skills> buscarSkills(@PathVariable("id") Long id){
        Skills skillsBuscada=skillsService.buscarSkills(id);
        return new ResponseEntity<>(skillsBuscada,HttpStatus.OK);
    }
    
    
}
