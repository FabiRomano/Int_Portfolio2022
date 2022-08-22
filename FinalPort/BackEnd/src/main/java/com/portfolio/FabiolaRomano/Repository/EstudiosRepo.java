package com.portfolio.FabiolaRomano.Repository;

import com.portfolio.FabiolaRomano.Entity.Estudios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface EstudiosRepo extends JpaRepository<Estudios, Long>{
    
}
