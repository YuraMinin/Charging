package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.User;

public interface BillingService {
    boolean transferMoney(Integer id, Integer amount);
    void changeStatusUser(Integer id);
}
