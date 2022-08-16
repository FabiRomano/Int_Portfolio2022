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
public class Estudios implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private long idEst;
    private String establecimientoEst;
    private String fechaInicioEst;
    private String fechaFinEst;
    private short actualEst;
    private String certificadoEst;

    public Estudios() {
    }

    public Estudios(long idEst, String establecimientoEst, String fechaInicioEst, String fechaFinEst, short actualEst, String certificadoEst) {
        this.idEst = idEst;
        this.establecimientoEst = establecimientoEst;
        this.fechaInicioEst = fechaInicioEst;
        this.fechaFinEst = fechaFinEst;
        this.actualEst = actualEst;
        this.certificadoEst = certificadoEst;
    }
    
    
}
