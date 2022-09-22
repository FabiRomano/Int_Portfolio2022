package com.portfolio.FabiolaRomano.security.repository;

import com.portfolio.FabiolaRomano.Entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface iUserRepository extends JpaRepository<User, Integer>{
    
    Optional<User>findByEmail(String email);   
    boolean existsByEmail(String email);
}