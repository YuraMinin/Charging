package com.netcracker.edu.be.controller;

import com.netcracker.edu.be.entity.BillingAccounts;
import com.netcracker.edu.be.service.BillingAccountService;
import com.netcracker.edu.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Console;

@RestController
@RequestMapping("/api/users")
public class BillingController {

    private BillingAccountService billingAccountService;
    private UserService userService;

    @Autowired
    public BillingController(UserService userService, BillingAccountService billingAccountService) {
        this.billingAccountService = billingAccountService;
        this.userService = userService;
    }

    @PostMapping("{id}/billing")
    public void createBillingAccount(@PathVariable Integer id, @RequestBody BillingAccounts billingAccount) {
        billingAccountService.save(billingAccount, id);
    }

    @PostMapping(value = "{id}/billing/transfer", params = {"amount"})
    public boolean transferMoney(@PathVariable Integer id,
                                 @RequestParam("amount") int amount,
                                 @RequestBody BillingAccounts billingAccount) {
        return billingAccountService.transferMoney(id, billingAccount, amount);
    }

    @PutMapping("/{id}")
    public void changeStatusUser(@PathVariable Integer id) {
        userService.blocked(id);
    }

}
