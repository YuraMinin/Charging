package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.UserEntity;

import java.util.List;

public interface UserService {
    List<UserEntity> findAll();
    UserEntity findById(Integer id);
    UserEntity save(UserEntity user);
    UserEntity authorization(UserEntity user);
}
