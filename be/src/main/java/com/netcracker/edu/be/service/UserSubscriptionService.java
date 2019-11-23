package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.entity.UsersSubscriptions;

import java.util.List;

public interface UserSubscriptionService {
    List<UsersSubscriptions> findAll();
    UsersSubscriptions findById(Integer id);
    UsersSubscriptions save(UsersSubscriptions subscription);
    void delete(Integer id);

}
