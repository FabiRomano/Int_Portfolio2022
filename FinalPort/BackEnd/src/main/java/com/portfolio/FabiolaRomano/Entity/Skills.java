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
public class Skills implements Serializable{
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idSkills;
    private String nombreSkills;
    private String fotoSkills;
    private int porcentajeSkills;

    public Skills() {
    }

    public Skills(Long idSkills, String nombreSkills, String fotoSkills, int porcentajeSkills) {
        this.idSkills = idSkills;
        this.nombreSkills = nombreSkills;
        this.fotoSkills = fotoSkills;
        this.porcentajeSkills = porcentajeSkills;
    }

   
   
    
    
}