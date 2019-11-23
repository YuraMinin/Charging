package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.Users;

import java.util.List;

public interface UserService {
    List<Users> findAll();
    Users authorization(String login, String password);
    Users save(Users user);
}
