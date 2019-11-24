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

    public Integer balance = 0;

    public List<Subscription> subscriptions;
}
