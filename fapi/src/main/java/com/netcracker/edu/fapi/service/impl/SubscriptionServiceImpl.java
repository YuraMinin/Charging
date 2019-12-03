package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.Subscription;
import com.netcracker.edu.fapi.service.SubscriptionService;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    public UserService userService;

    @Override
    public List<Subscription> findAll(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        Subscription[] subscriptions = restTemplate.getForObject("http://localhost:8081/api/users/subscriptions",
                Subscription[].class);

        if (subscriptions == null) {
            return Collections.emptyList();
        }

        List<Subscription> subscription = Arrays.asList(subscriptions);

        if (id.equals(0)) {
            return subscription;
        }

        List<Subscription> userSubscriptions = userService.findById(id).subscriptions;

        for (Subscription allItem: subscription) {
            for (Subscription item: userSubscriptions) {
                if (allItem.id.equals(item.id)) {
                    allItem.status = true;
                    allItem.period = item.period;
                    System.out.println(allItem.name);
                }
            }
        }
        return subscription;
    }

    @Override
    public List<Subscription> findPage(Integer id, Integer limit, Integer offset) {

        List<Subscription> subscription = findAll(id);

        int count = offset + limit;
        if (count > subscription.size()) {
            count = subscription.size();
        }

        return subscription.subList(offset, count);

    }

    @Override
    public Integer count(Integer id) {
        // modify
        return findAll(id).size();
    }

    @Override
    public void save(Subscription subscription, Integer idUser) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.put("http://localhost:8081/api/users/subscriptions?idUser=" + idUser
                + "&idSubscription=" + subscription.id, subscription.period);
    }

    @Override
    public void delete(Integer id, Subscription subscription) {
        List<Subscription> subscriptions = userService.findById(id).subscriptions;
        for (Subscription item: subscriptions) {
            if (item.id.equals(subscription.id)) {
                RestTemplate restTemplate = new RestTemplate();
                // System.out.println(item.idSubscription);
                restTemplate.delete("http://localhost:8081/api/users/subscriptions?idSubscription=" +
                        item.idSubscription );
            }
        }
    }

    @Override
    public void create(Subscription subscription) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.postForEntity("http://localhost:8081/api/users/subscriptions", subscription, Subscription.class);
    }


}
