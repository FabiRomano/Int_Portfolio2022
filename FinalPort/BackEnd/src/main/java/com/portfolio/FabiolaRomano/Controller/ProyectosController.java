package com.portfolio.FabiolaRomano.Controller;
import com.portfolio.FabiolaRomano.Entity.Proyectos;
import com.portfolio.FabiolaRomano.Service.ProyectosService;
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
@RequestMapping("/proyectos")
public class ProyectosController {
    
          private final ProyectosService proyectosService;

    public ProyectosController(ProyectosService proyectosService) {
        this.proyectosService = proyectosService;
    }
    
    @GetMapping("/all")
    public ResponseEntity <List<Proyectos>> obtenerProyectos(){
        
        List<Proyectos> proyectos = proyectosService.traerProyectos();
        
        return new ResponseEntity<>(proyectos, HttpStatus.OK);
       
     }
    
    @PutMapping("/update")
    
    public ResponseEntity<Proyectos> editarProyectos(@RequestBody Proyectos proyectos){
    
       Proyectos updateProyectos= proyectosService.editarProyectos(proyectos);
       
       return new ResponseEntity<>(updateProyectos,HttpStatus.OK);
}
 
    @PutMapping("/add")
    public ResponseEntity<Proyectos> crearProyectos(@RequestBody Proyectos proyectos){
        
        Proyectos nuevoProyectos = proyectosService.addProyectos(proyectos);
          return new ResponseEntity<>(nuevoProyectos,HttpStatus.CREATED);
    }
    
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> borrarProyectos(@PathVariable ("id") Long id){
        proyectosService.eliminarProyectos(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
