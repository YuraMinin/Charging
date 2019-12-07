package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.Subscriptions;
import com.netcracker.edu.be.repository.SubscriptionRepository;
import com.netcracker.edu.be.repository.UserRepository;
import com.netcracker.edu.be.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Subscriptions> findAll() {
        return (List<Subscriptions>) subscriptionRepository.findAll();
    }

    @Override
    public Optional<Subscriptions> findById(Integer id) {

        return subscriptionRepository.findById(id);
        //return userRepository.findByUserId(1).
    }

    @Override
    public Subscriptions save(Subscriptions subscription) {
        Subscriptions newSubscription = new Subscriptions(subscription.getName(), subscription.getCost());
        return subscriptionRepository.save(newSubscription);
    }

    @Override
    public List<Subscriptions> findByName(Integer offset, Integer limit, String name) {
        List<Subscriptions> subscriptions = new ArrayList<>();

        if (name.equals("")){
            return (List<Subscriptions>) subscriptionRepository.findAll();
        }
        for (Subscriptions item : findAll()) {
            if (item.getName().contains(name)) {
                subscriptions.add(item);
            }
        }

        int count = offset + limit;
        if (count > subscriptions.size()) {
            count = subscriptions.size();
        }
        return subscriptions.subList(offset, count);

    }

    @Override
    public void deleteById(Integer id) {
        subscriptionRepository.deleteById(id);
    }
}
