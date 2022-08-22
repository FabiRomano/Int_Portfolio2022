package com.portfolio.FabiolaRomano.Repository;

import com.portfolio.FabiolaRomano.Entity.Hys;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HysRepo extends JpaRepository<Hys, Long>{
    
}
