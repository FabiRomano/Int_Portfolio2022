package com.portfolio.FabiolaRomano.Service;

import com.portfolio.FabiolaRomano.Entity.User;
import com.portfolio.FabiolaRomano.security.repository.iUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class UserService {
    
     @Autowired
    iUserRepository iuserRepo;

    public boolean existsByEmail(String email) {
        return iuserRepo.existsByEmail(email);
    }

    public void save(User usuario) {
        iuserRepo.save(usuario);
    }
    
}
