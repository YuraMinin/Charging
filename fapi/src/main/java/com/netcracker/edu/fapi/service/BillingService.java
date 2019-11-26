package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.UserEntity;

public interface BillingService {
    boolean transferMoney(Integer id, UserEntity user, Integer amount);
}
