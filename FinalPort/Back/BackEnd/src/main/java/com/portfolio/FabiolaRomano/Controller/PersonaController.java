package com.portfolio.FabiolaRomano.Controller;

import com.portfolio.FabiolaRomano.Entity.Persona;
import com.portfolio.FabiolaRomano.Service.PersonaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/persona")
public class PersonaController {
    private final PersonaService personaService;

    public PersonaController(PersonaService personaService) {
        this.personaService = personaService;
    }
    
    @GetMapping("/id/{id}")
    public ResponseEntity<Persona> obtenerPersona(@PathVariable ("id") long id){
        
        Persona persona = personaService.buscarPersonaPorId(id);
        
        return new ResponseEntity<>(persona, HttpStatus.OK);
       
     }
    
    @PutMapping("/editar")
    
    public ResponseEntity<Persona> editarPersona(@RequestBody Persona persona){
    
       Persona updatePersona= personaService.editarPersona(persona);
       
       return new ResponseEntity<>(updatePersona,HttpStatus.OK);
}
    
     @PostMapping("/crear")
    public ResponseEntity<Persona> crearPersona(@RequestBody Persona persona){
        Persona personaCreada= personaService.crearPersona(persona);
        return new ResponseEntity<>(personaCreada,HttpStatus.CREATED);
    }
    
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarPersona(@PathVariable Long id){
        personaService.eliminarPersona(id);
        return new ResponseEntity<>(HttpStatus.OK);
    } 
    @GetMapping("/buscar/{id}")
    public ResponseEntity<Persona> buscarPersona(@PathVariable("id") Long id){
        Persona personaBuscada=personaService.buscarPersonaPorId(id);
        return new ResponseEntity<>(personaBuscada,HttpStatus.OK);
    }
    
    }