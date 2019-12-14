package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.Subscription;

import java.util.List;

public interface SubscriptionService {
    List<Subscription> findAll(Integer id, Integer limit, Integer offset, String name);
    List<Subscription> findByPage(Integer id, Integer limit, Integer offset, String name);
    Integer count(Integer id);
    void save(Subscription subscription, Integer idUser);
    void delete(Integer id, Subscription subscription);
    void create(Subscription subscription);
}
