package com.netcracker.edu.fapi.models;

import java.util.List;

public class UserEntity {

    public Integer id;
    public String firstName;
    public String lastName;
    public String login;
    public String password;
    public String email;
    public Boolean blocked;
    public Boolean admin;
    public Integer balance = 0;
    public String numberCard;
    public Integer amountTransfer;
    public List<Subscription> subscriptions;
    public List<BillingAccount> billingAccounts;
}
