package com.netcracker.edu.be.controller;

import com.netcracker.edu.be.entity.Subscriptions;
import com.netcracker.edu.be.service.SubscriptionService;
import com.netcracker.edu.be.service.UserSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @Autowired
    private UserSubscriptionService userSubscriptionService;

    @GetMapping(value = "/subscriptions")
    public List<Subscriptions> getAllSubscription() {

        return subscriptionService.findAll();
    }

    // Add new Subscription
    @PostMapping(value = "/subscriptions")
    public void addSubscription(@RequestBody Subscriptions subscription) {

        subscriptionService.save(subscription);
    }

    @PutMapping(value = "/subscriptions", params = {"idUser", "idSubscription"})
    public void onSubscription(@RequestParam("idUser") int idUser,
                               @RequestParam("idSubscription") int idSubscription,
                               @RequestBody String period) {

        userSubscriptionService.save(period, idUser, idSubscription);
    }

    @DeleteMapping(value = "/subscriptions", params = {"idSubscription"})
    public void offSubscription(@RequestParam("idSubscription") int idSubscription) {

        userSubscriptionService.deleteById(idSubscription);
    }

}
