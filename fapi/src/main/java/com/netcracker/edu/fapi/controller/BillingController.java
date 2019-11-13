package com.netcracker.edu.fapi.controller;
import com.netcracker.edu.fapi.models.Datasource;
import com.netcracker.edu.fapi.models.Identification;
import com.netcracker.edu.fapi.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class BillingController {

    @Autowired
    private Datasource date;

    @PostMapping("/billing/{id}")
    public boolean transferMoney(@PathVariable Integer id, @RequestBody Identification user) {
        return date.transferMoney(id, user);
    }
}
