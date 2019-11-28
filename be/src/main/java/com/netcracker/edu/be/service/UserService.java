package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.Users;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<Users> findAll();
    Optional<Users> findById(Integer id);
    Users authorization(Users user);
    Users save(Users user);
    void blocked(Integer id);
}
