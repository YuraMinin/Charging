package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.Datasource;
import com.netcracker.edu.fapi.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class ProductsController {

    @Autowired
    private Datasource data;

    // All products user
    @GetMapping("/{id}/products")
    public List<Product> getAllUsersProduct(@PathVariable Integer id) {

        return data.getAllProductUser(id);
    }

    // Add new product
    @PostMapping("/products")
    public void addNewProduct(@RequestBody Product product) {
        data.addProduct(product);
    }

    // ON/OFF user subscription
    @PostMapping("/{id}/product")
    public void addProduct(@PathVariable Integer id, @RequestBody Product product) {
        data.modifySubscription(id, product);
    }




}
