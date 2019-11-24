package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.BillingAccounts;
import com.netcracker.edu.be.repository.BillingAccountRepository;
import com.netcracker.edu.be.service.BillingAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillingAccountServiceImpl implements BillingAccountService {

    @Autowired
    private BillingAccountRepository billingAccountRepository;

    @Override
    public List<BillingAccounts> findAll() {
        return (List<BillingAccounts>) billingAccountRepository.findAll();
    }

    @Override
    public Optional<BillingAccounts> findById(Integer id) {
        return billingAccountRepository.findById(id);
    }

    @Override
    public BillingAccounts save(BillingAccounts billingAccount) {
        return billingAccountRepository.save(billingAccount);
    }

    @Override
    public void deleteById(Integer id) {
        billingAccountRepository.deleteById(id);
    }
}
