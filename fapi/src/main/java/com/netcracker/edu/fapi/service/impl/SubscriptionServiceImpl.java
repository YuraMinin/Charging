package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.Product;
import com.netcracker.edu.fapi.models.Subscription;
import com.netcracker.edu.fapi.models.UserEntity;
import com.netcracker.edu.fapi.service.SubscriptionService;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
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
}
