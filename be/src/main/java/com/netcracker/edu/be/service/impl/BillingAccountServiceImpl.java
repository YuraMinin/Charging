package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.BillingAccounts;
import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.repository.BillingAccountRepository;
import com.netcracker.edu.be.service.BillingAccountService;
import com.netcracker.edu.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillingAccountServiceImpl implements BillingAccountService {

    @Autowired
    private BillingAccountRepository billingAccountRepository;

    @Autowired
    private UserService userService;

    @Override
    public List<BillingAccounts> findAll() {
        return (List<BillingAccounts>) billingAccountRepository.findAll();
    }

    @Override
    public BillingAccounts findByUserId(Integer id) {

        return userService.findById(id).getBillingAccounts().get(0);
        //return billingAccountRepository.findByUserId(id);
    }

    @Override
    public BillingAccounts save(BillingAccounts billingAccount, Integer idUser) {

        BillingAccounts newBillingAccount = new BillingAccounts(billingAccount.getNumberCard(),
                userService.findById(idUser));
        return billingAccountRepository.save(newBillingAccount);

    }

    @Override
    public boolean transferMoney(Integer id, Integer amount) {


        Users user = userService.findById(id);
        user.getBillingAccounts().get(0).setAmount(amount);
        billingAccountRepository.save(user.getBillingAccounts().get(0));
        return true;


    }

    @Override
    public BillingAccounts findById(Integer id) {
        return billingAccountRepository.findById(id).get();
    }

    @Override
    public void deleteById(Integer id) {
        billingAccountRepository.deleteById(id);
    }

    @Override
    public void update(BillingAccounts billingAccounts) {
        billingAccountRepository.save(billingAccounts);
    }
}
