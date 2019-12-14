package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.BillingService;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class BillingController {

    @Autowired
    private BillingService billingService;

    @Autowired
    private UserService userService;


    // block/unlock user (For Admin)
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public User changeStatusUser(@PathVariable Integer id,
                                 @RequestBody User user) {

        billingService.changeStatusUser(id);
        return userService.findById(id);
    }


    // For Users
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/billing/{id}")
    public Integer transferMoney(@PathVariable Integer id,
                                 @RequestBody User user) {
        if (billingService.transferMoney(id, user, user.amountTransfer)) {
            return 1;
        } else return -1;


    }
}
