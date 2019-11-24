package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.UsersSubscriptions;
import com.netcracker.edu.be.repository.UserSubscriptionRepository;
import com.netcracker.edu.be.service.SubscriptionService;
import com.netcracker.edu.be.service.UserService;
import com.netcracker.edu.be.service.UserSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Optional;

@Service
public class UserSubscriptionServiceImpl implements UserSubscriptionService {

    @Autowired
    private UserSubscriptionRepository userSubscriptionRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private SubscriptionService subscriptionService;

    @Override
    public List<UsersSubscriptions> findAll() {
        return (List<UsersSubscriptions>) userSubscriptionRepository.findAll();
    }

    @Override
    public Optional<UsersSubscriptions> findById(Integer id) {
        return userSubscriptionRepository.findById(id);
    }

    @Override
    public UsersSubscriptions save(String period, Integer idUser, Integer idSubscription) {

        if (userService.findById(idUser).isPresent() && subscriptionService.findById(idSubscription).isPresent()) {
            UsersSubscriptions newUsersSubscription = new UsersSubscriptions(period, userService.findById(idUser).get()
                    , subscriptionService.findById(idSubscription).get());

            return userSubscriptionRepository.save(newUsersSubscription);
        }

        else return null;

    }

    @Override
    public void deleteById(Integer id) {
        userSubscriptionRepository.deleteById(id);
    }

}
