package com.portfolio.FabiolaRomano.Repository;

import com.portfolio.FabiolaRomano.Entity.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SkillsRepo extends JpaRepository<Skills, Long>{
    
}
