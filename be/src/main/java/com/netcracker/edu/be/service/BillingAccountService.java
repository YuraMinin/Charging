package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.BillingAccounts;
import java.util.List;


public interface BillingAccountService {
    List<BillingAccounts> findAll();
    BillingAccounts findById(Integer id);
    BillingAccounts findByUserId(Integer id);
    BillingAccounts save(BillingAccounts billingAccount, Integer idUser);
    void update(BillingAccounts billingAccounts);
    boolean transferMoney(Integer id, BillingAccounts billingAccounts, Integer amount);
    void deleteById(Integer id);
}
