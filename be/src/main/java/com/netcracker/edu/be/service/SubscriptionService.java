package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.Subscriptions;

import java.util.List;
import java.util.Optional;

public interface SubscriptionService {
    List<Subscriptions> findAll();

    List<Subscriptions> findByName(Integer offset, Integer limit, String name);

    Optional<Subscriptions> findById(Integer id);

    Subscriptions save(Subscriptions subscription);

    void deleteById(Integer id);
}
