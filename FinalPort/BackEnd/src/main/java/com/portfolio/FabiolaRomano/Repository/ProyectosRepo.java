package com.portfolio.FabiolaRomano.Repository;

import com.portfolio.FabiolaRomano.Entity.Proyectos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProyectosRepo extends JpaRepository<Proyectos, Long>{
    
}
