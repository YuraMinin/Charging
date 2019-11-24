package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.UsersSubscriptions;
import com.netcracker.edu.be.repository.UserSubscriptionRepository;
import com.netcracker.edu.be.service.UserSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserSubscriptionServiceImpl implements UserSubscriptionService {

    @Autowired
    private UserSubscriptionRepository userSubscriptionRepository;

    @Override
    public List<UsersSubscriptions> findAll() {
        return (List<UsersSubscriptions>) userSubscriptionRepository.findAll();
    }

    @Override
    public Optional<UsersSubscriptions> findById(Integer id) {
        return userSubscriptionRepository.findById(id);
    }

    @Override
    public UsersSubscriptions save(UsersSubscriptions usersSubscription) {
        return userSubscriptionRepository.save(usersSubscription);
    }

    @Override
    public void deleteById(Integer id) {
        userSubscriptionRepository.deleteById(id);
    }

}
