package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.BillingAccounts;

import java.util.List;
import java.util.Optional;

public interface BillingAccountService {
    List<BillingAccounts> findAll();
    Optional <BillingAccounts> findById(Integer id);
    BillingAccounts save(BillingAccounts billingAccount);
    void deleteById(Integer id);
}
