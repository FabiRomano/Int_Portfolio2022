package com.portfolio.FabiolaRomano.Entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
 @Entity
public class Persona implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private long id;
    private String nombre;
    private String apellido;
    private String titulo;
    private String descripcion;
    private String fotoPerfil;
    private String telefono;
    private String correo;
    private String pass;
    private String fechaNac;
    
   
    
    
    @OneToMany (fetch = FetchType.LAZY, mappedBy = "idEdu")
    private List<Educacion> educacionList;
    
     @OneToMany (fetch = FetchType.LAZY, mappedBy = "idExp")
    private List<Experiencia> experienciaList;
     
      @OneToMany (fetch = FetchType.LAZY, mappedBy = "idSkills")
    private List<Skills> skillsList;
      
      @OneToMany (fetch = FetchType.LAZY, mappedBy = "idProyectos")
    private List<Proyectos> proyectosList;

    public Persona() {
    }

    public Persona(long id, String nombre, String apellido, String titulo, String descripcion, String fotoPerfil, String telefono, String correo, String pass, String fechaNac, List<Educacion> educacionList, List<Experiencia> experienciaList, List<Skills> skillsList, List<Proyectos> proyectosList) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fotoPerfil = fotoPerfil;
        this.telefono = telefono;
        this.correo = correo;
        this.pass = pass;
        this.fechaNac = fechaNac;
        this.educacionList = educacionList;
        this.experienciaList = experienciaList;
        this.skillsList = skillsList;
        this.proyectosList = proyectosList;
    }

   

   
   
      
      
}
