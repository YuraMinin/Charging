package com.netcracker.edu.be.controller;

import com.netcracker.edu.be.entity.Subscriptions;
import com.netcracker.edu.be.entity.UsersSubscriptions;
import com.netcracker.edu.be.repository.SubscriptionRepository;
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

    @RequestMapping(value = "/subscriptions", method = RequestMethod.GET)
    public List<Subscriptions> getAllSubscription() {

        return subscriptionService.findAll();
    }

    @RequestMapping(value = "/subscriptions", params = {"idUser", "idSubscription"}, method = RequestMethod.PUT)
    public void modifyStatusProducts(@RequestParam("idUser") int idUser,
                                     @RequestParam("idSubscription") int idSubscription,
                                     @RequestBody String period) {
        System.out.println(period);
        System.out.println(idUser);
        System.out.println(idSubscription);
        userSubscriptionService.save(period, idUser, idSubscription);
        //return usersSubscription;
    }

    @RequestMapping(value = "/subscriptions", params = {"idSubscription"}, method = RequestMethod.DELETE)
    public void offSubscription(@RequestParam("idSubscription") int idSubscription) {
        System.out.println(idSubscription);
        userSubscriptionService.deleteById(idSubscription);
    }

}
