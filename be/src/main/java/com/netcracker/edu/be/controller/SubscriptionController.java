package com.netcracker.edu.be.controller;

import com.netcracker.edu.be.entity.Subscriptions;
import com.netcracker.edu.be.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class SubscriptionController {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @RequestMapping(value = "/subscriptions", method = RequestMethod.GET)
    public List<Subscriptions> getAllUsers() {
        return (List<Subscriptions>) subscriptionRepository.findAll();
    }
}
