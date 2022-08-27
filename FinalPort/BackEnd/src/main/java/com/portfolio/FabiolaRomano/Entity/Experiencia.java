package com.portfolio.FabiolaRomano.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;



@Getter @Setter
@Entity
public class Experiencia implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idExp;
    private String empresaExp;
    private String fechaInicioExp;
    private String fechaFinExp;
    private String descripcionExp;
    

    public Experiencia() {
    }

    public Experiencia(long idExp, String empresaExp, String fechaInicioExp, String fechaFinExp, String descripcionExp) {
        this.idExp = idExp;
        this.empresaExp = empresaExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;
        this.descripcionExp = descripcionExp;
    }

  
    }
    
    
    



