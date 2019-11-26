package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.*;
import com.netcracker.edu.fapi.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class BillingController {



    @Autowired
    private BillingService billingService;


    // block/unlock user
    @PutMapping("/{id}")
    public UserEntity changeStatusUser(@PathVariable Integer id,
                                 @RequestBody UserEntity user) {
        return user;
        //return data.modifyUser(user, id);
    }


    @PostMapping("/billing/{id}")
    public boolean transferMoney(@PathVariable Integer id, @RequestBody UserEntity user) {
        //return date.transferMoney(id, user);
        return billingService.transferMoney(id, user, user.amountTransfer);
    }
}
