package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.BillingAccounts;

import java.util.List;

public interface BillingAccountService {
    List<BillingAccounts> findAll();
    BillingAccounts findById(Integer id);
    BillingAccounts save(BillingAccounts billingAccount);
    void delete(Integer id);
}
