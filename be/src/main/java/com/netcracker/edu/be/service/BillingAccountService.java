package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.BillingAccounts;
import com.netcracker.edu.be.entity.Users;

import java.util.List;
import java.util.Optional;

public interface BillingAccountService {
    List<BillingAccounts> findAll();
    BillingAccounts findById(Integer id);
    BillingAccounts save(BillingAccounts billingAccount, Integer idUser);
    boolean transferMoney(Integer id, BillingAccounts billingAccounts, Integer amount);
    void deleteById(Integer id);
}
