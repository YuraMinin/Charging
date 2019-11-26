package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.repository.UserRepository;
import com.netcracker.edu.be.service.UserService;
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
        Users newUser = new Users(user);
        return userRepository.save(newUser);
    }


}
