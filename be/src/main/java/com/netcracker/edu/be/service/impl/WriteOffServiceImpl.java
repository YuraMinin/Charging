package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.BillingAccounts;
import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.entity.UsersSubscriptions;
import com.netcracker.edu.be.repository.UserRepository;
import com.netcracker.edu.be.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalTime;

@Service
public class WriteOffServiceImpl implements WriteOffService{

    private UserService userService;
    private UserSubscriptionService userSubscriptionService;
    private BillingAccountService billingAccountService;
    private SubscriptionService subscriptionService;
    private UserRepository userRepository;

    @Autowired
    public WriteOffServiceImpl(UserService userService, UserSubscriptionService userSubscriptionService,
                               BillingAccountService billingAccountService, SubscriptionService subscriptionService,
                               UserRepository userRepository) {
        this.userService = userService;
        this.userSubscriptionService = userSubscriptionService;
        this.billingAccountService = billingAccountService;
        this.subscriptionService = subscriptionService;
        this.userRepository = userRepository;
    }


    public void blockedUser() {

        for (Users item : userService.findAll()) {
            if (item.getBillingAccounts().get(0).getAmount() <= 0 && !item.getBlocked()) {
                item.setBlocked(true);
                userRepository.save(item);
                // System.out.println(item.getLastName() + " amount =  " + item.getBillingAccounts().get(0).getAmount());
            } else if (item.getBillingAccounts().get(0).getAmount() > 0 && item.getBlocked()) {
                item.setBlocked(false);
                userRepository.save(item);
            }

        }
    }

    public void writeOffMoney() {
        for (UsersSubscriptions item: userSubscriptionService.findAll()) {


            if (item.getTimeOff().compareTo(LocalTime.now()) == -1) {
                userSubscriptionService.deleteById(item.getIdSubscription());
            } else {


                LocalTime writeOffTime = LocalTime.of(item.getTimeOff().getHour(), item.getTimeOff().getMinute(),
                        item.getTimeOff().getSecond());
                writeOffTime = writeOffTime.minusMinutes(Long.parseLong(item.getPeriod()));


                if (writeOffTime.compareTo(LocalTime.now()) == -1) {

                    Integer billingAccountId = item.getUser().getBillingAccounts().get(0).getId();

                    BillingAccounts billingAccount = billingAccountService.findById(billingAccountId);
                    billingAccount.setAmount(-subscriptionService.findById(item.getid()).get().getCost());

                    billingAccountService.update(billingAccount);

                    Long period = Long.parseLong(item.getPeriod()) - 1;
                    item.setPeriod(period.toString());
                    userSubscriptionService.update(item);
                }

            }

        }
    }
}
