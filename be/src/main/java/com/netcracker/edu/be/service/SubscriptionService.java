package com.netcracker.edu.be.service;

import com.netcracker.edu.be.entity.Subscriptions;
import java.util.List;

public interface SubscriptionService {
    List<Subscriptions> findAll();
    Subscriptions findById(Integer id);
    Subscriptions save(Subscriptions subscription);
    void delete(Integer id);
}
