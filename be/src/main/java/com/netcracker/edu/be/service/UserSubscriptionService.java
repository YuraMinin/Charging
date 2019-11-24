package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.entity.UsersSubscriptions;

import java.util.List;
import java.util.Optional;

public interface UserSubscriptionService {
    List<UsersSubscriptions> findAll();
    Optional <UsersSubscriptions> findById(Integer id);
    UsersSubscriptions save(UsersSubscriptions subscription);
    void deleteById(Integer id);

}