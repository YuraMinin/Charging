package com.netcracker.edu.be.service.impl;

import com.netcracker.edu.be.entity.BillingAccounts;
import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.entity.UsersSubscriptions;
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

    @Autowired
    public WriteOffServiceImpl(UserService userService, UserSubscriptionService userSubscriptionService,
                               BillingAccountService billingAccountService, SubscriptionService subscriptionService) {
        this.userService = userService;
        this.userSubscriptionService = userSubscriptionService;
        this.billingAccountService = billingAccountService;
        this.subscriptionService = subscriptionService;
    }


    public void blockedUser() {

        for (Users item : userService.findAll()) {
            if (item.getBillingAccounts().get(0).getAmount() <= 0) {
                item.setBlocked(true);
                userService.save(item);
            } else if (item.getBillingAccounts().get(0).getAmount() > 0 && item.getBlocked()) {
                item.setBlocked(false);
                userService.save(item);
            }

        }
    }

    public void writeOffMoney() {
        for (UsersSubscriptions item: userSubscriptionService.findAll()) {

            /*LocalTime timeOn = item.getTimeOn();
            LocalTime timeOff = LocalTime.of(timeOn.getHour(), timeOn.getMinute(), timeOn.getSecond());
            timeOff = timeOff.plusMinutes(Long.parseLong(item.getPeriod()));*/

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
