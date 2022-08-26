package com.portfolio.FabiolaRomano.Entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
@Entity
public class Proyectos implements Serializable{
    
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    
    private long idProyectos;
    private String nombreProyectos;
    private String inicioProyectos;
    private String finProyectos;
    private String linkProyecto;
    private String descripcionProyectos;

    public Proyectos() {
    }

    public Proyectos(long idProyectos, String nombreProyectos, String inicioProyectos, String finProyectos, String linkProyecto, String descripcionProyectos) {
        this.idProyectos = idProyectos;
        this.nombreProyectos = nombreProyectos;
        this.inicioProyectos = inicioProyectos;
        this.finProyectos = finProyectos;
        this.linkProyecto = linkProyecto;
        this.descripcionProyectos = descripcionProyectos;
    }

 

    
    
}
