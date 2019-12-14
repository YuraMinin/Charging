package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.repository.UserRepository;
import com.netcracker.edu.be.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Users> findAll() {
        return (List<Users>) userRepository.findAll();
    }

    @Override
    public Optional<Users> findById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public Users authorization(Users user) {

        for (Users item : userRepository.findAll()) {
            if (item.getLogin().equals(user.getLogin()) && item.getPassword().equals(user.getPassword())) {
                return item;
            }
        }
        return null;
    }

    @Override
    public Users save(Users user) {
        for (Users item : userRepository.findAll()) {
            if (item.getLogin().equals(user.getLogin())){
                user.setId(-1);
                return user;
            }
        }
        return userRepository.save(user);
    }

    public void blocked(Integer id) {
        if (userRepository.findById(id).isPresent()) {
            System.out.println("Blocked!!!");
            userRepository.findById(id).get().setBlocked(!userRepository.findById(id).get().getBlocked());
            userRepository.save(userRepository.findById(id).get());
        }
    }

    public void managementAdmin(Integer id, Boolean status) {
        Users user = userRepository.findById(id).get();
        user.setAdmin(status);
        userRepository.save(user);
    }


    @Override
    public Users findByLogin(String login) {

        if(login.equals("admin")) {
            Users user = new Users();
            user.setId(0);
            user.setLogin("admin");
            user.setPassword("$2y$12$iNsyQ.8XSCTMWfJykKNek.CdB5YlRt4C/0YVVjrmPCsaqoE3PdN.q");
            user.setAdmin(true);
            return user;
        }


        for (Users item : userRepository.findAll()) {
            if (item.getLogin().equals(login)){
                return item;
            }
        }
        return null;
    }


}
