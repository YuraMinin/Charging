package com.netcracker.edu.fapi.controller;


import com.netcracker.edu.fapi.models.Subscription;
import com.netcracker.edu.fapi.service.SubscriptionService;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class SubscriptionsController {

    private SubscriptionService subscriptionService;

    @Autowired
    public SubscriptionsController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    // For Admin and Users
    @GetMapping(value = "/{id}/products", params = {"offset", "limit", "name"})
    public List<Subscription> getUserSubscriptions(@PathVariable("id") int id,
                                                   @RequestParam("offset") int offset,
                                                   @RequestParam("limit") int limit,
                                                   @RequestParam("name") String name) {

        return subscriptionService.findByPage(id, limit, offset, name);
    }

    // For Admin and Users
    @GetMapping("/{id}/products/count")
    public int countSubscriptions(@PathVariable Integer id) {

        return subscriptionService.count(id);
    }

    // Add new subscription (For Admin)
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/products")
    public void addNewSubscription(@RequestBody Subscription subscription) {

        subscriptionService.create(subscription);
    }


    // ON/OFF user subscription (For Users)
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/{id}/product")
    public void addSubscription(@PathVariable Integer id,
                                @RequestBody Subscription subscription) {

        if (subscription.status.equals(true)) {
            subscriptionService.save(subscription, id);

        } else {

            subscriptionService.delete(id, subscription);
        }
    }


}
