package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.Subscription;

import java.util.List;

public interface SubscriptionService {
    List<Subscription> findAll(Integer id);
    List<Subscription> findPage(Integer id, Integer limit, Integer offset);
    Integer count(Integer id);
}
