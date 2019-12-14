package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.Users;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<Users> findAll();

    Optional<Users> findById(Integer id);

    Users authorization(Users user);

    //add new user
    Users save(Users user);

    void blocked(Integer id);

    void managementAdmin(Integer id, Boolean status);

    // Security
    Users findByLogin(String login);
}
