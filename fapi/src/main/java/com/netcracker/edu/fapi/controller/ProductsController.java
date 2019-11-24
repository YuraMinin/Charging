package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.Datasource;
import com.netcracker.edu.fapi.models.Product;
import com.netcracker.edu.fapi.models.Subscription;
import com.netcracker.edu.fapi.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class ProductsController {

    @Autowired
    private Datasource data;

    @Autowired
    private SubscriptionService subscriptionService;

    // All products user
    @GetMapping("/{id}/products")
    public List<Subscription> getAllUsersProduct(@PathVariable Integer id) {

        // return data.getAllProductUser(id);
        return subscriptionService.findAll(id);
    }

    @GetMapping(value = "/{id}/products", params = {"offset", "limit"})
    public List<Subscription> getUserProducts(@PathVariable("id") int id,
                                              @RequestParam("offset") int offset,
                                              @RequestParam("limit") int limit) {
        // return data.getUserSubscriptions(id, limit, offset);
        return subscriptionService.findPage(id, limit, offset);
    }

    @GetMapping("/{id}/products/count")
    public int countProducts(@PathVariable Integer id) {
        //return data.getAllProductUser(id).size();
        return subscriptionService.count(id);
    }

    // Add new product
    @PostMapping("/products")
    public void addNewProduct(@RequestBody Product product) {
        data.addProduct(product);
    }

    // ........Test..........
    // ON/OFF user subscription
    @PostMapping("/{id}/product")
    public void addProduct(@PathVariable Integer id,
                           @RequestBody Subscription subscription) {
        if (subscription.status.equals(true)) {
            subscriptionService.save(subscription, id);
            System.out.println(subscription.status);
        }
        else {
            // subscription.period = "0";
            subscriptionService.delete(id, subscription);
        }
    }


}
