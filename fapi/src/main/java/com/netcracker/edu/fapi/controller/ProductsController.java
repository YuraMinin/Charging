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

    @GetMapping("/{id}/products/offset={offset}&limit={limit}")
    public List<Product> getUserProducts(@PathVariable("id") int id, @PathVariable("offset") int offset,
                                         @PathVariable("limit") int limit) {
        int count = offset + limit;
        if (count > data.getAllProductUser(id).size()) count = data.getAllProductUser(id).size();
        return data.getAllProductUser(id).subList(offset, count);
    }

    @GetMapping("/{id}/products/count")
    public int countProducts(@PathVariable Integer id) {
        return data.getAllProductUser(id).size();
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
