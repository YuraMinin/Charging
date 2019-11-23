package com.netcracker.edu.be.repository;

import com.netcracker.edu.be.entity.UsersSubscriptions;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSubscriptionRepository extends CrudRepository<UsersSubscriptions, Integer> {
}
