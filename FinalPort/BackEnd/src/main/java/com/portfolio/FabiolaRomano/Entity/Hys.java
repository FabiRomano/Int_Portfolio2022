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
public class Hys implements Serializable{
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idHys;
    private String nombreHys;
    private String fotoHys;
    private int porcentajeHys;

    public Hys() {
    }

    public Hys(Long idHys, String nombreHys, String fotoHys, int porcentajeHys) {
        this.idHys = idHys;
        this.nombreHys = nombreHys;
        this.fotoHys = fotoHys;
        this.porcentajeHys = porcentajeHys;
    }

   
    
    
}