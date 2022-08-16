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
    private String fotoSHys;
    private int porcentajeSHys;

    public Hys() {
    }

    public Hys(Long idHys, String nombreHys, String fotoSHys, int porcentajeSHys) {
        this.idHys = idHys;
        this.nombreHys = nombreHys;
        this.fotoSHys = fotoSHys;
        this.porcentajeSHys = porcentajeSHys;
    }
    
    
    
}