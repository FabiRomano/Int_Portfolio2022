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
public class Educacion implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private long idEdu;
    private String establecimientoEdu;
    private String fechaInicioEdu;
    private String fechaFinEdu;
    private String certificadoEdu;
    private String img;

    public Educacion() {
    }

    public Educacion(long idEdu, String establecimientoEdu, String fechaInicioEdu, String fechaFinEdu, String certificadoEdu, String img) {
        this.idEdu = idEdu;
        this.establecimientoEdu = establecimientoEdu;
        this.fechaInicioEdu = fechaInicioEdu;
        this.fechaFinEdu = fechaFinEdu;
        this.certificadoEdu = certificadoEdu;
        this.img = img;
    }

  
  
    
}
