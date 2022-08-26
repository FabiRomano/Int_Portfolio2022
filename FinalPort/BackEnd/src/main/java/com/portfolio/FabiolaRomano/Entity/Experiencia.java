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

public class Experiencia implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idExp;
    private String empresaExp;
    private String fechaInicioExp;
    private String fechaFinExp;
    private String descripicionExp;
    

    public Experiencia() {
    }

    public Experiencia(long idExp, String empresaExp, String fechaInicioExp, String fechaFinExp, String descripicionExp) {
        this.idExp = idExp;
        this.empresaExp = empresaExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;
        this.descripicionExp = descripicionExp;
    }

  
    }
    
    
    



