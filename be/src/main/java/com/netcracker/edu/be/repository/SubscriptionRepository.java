package com.netcracker.edu.be.repository;

import com.netcracker.edu.be.entity.Subscriptions;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriptionRepository extends CrudRepository<Subscriptions, Integer> {
}
