package com.portfolio.FabiolaRomano.Repository;

import com.portfolio.FabiolaRomano.Entity.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ExperienciaRepo extends JpaRepository<Experiencia, Long>{
    
}
