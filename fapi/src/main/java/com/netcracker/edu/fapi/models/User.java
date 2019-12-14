package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class User {

    /*private long id;
    public String firstName;
    private String login;
    private String password;
    private String role;*/

    public Integer id;
    // public String username;
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
    private String role = "USER";

    public List<Subscription> subscriptions;
    public List<BillingAccount> billingAccounts;

    public User() {
    }

    public User(String login, String password, String role) {
        this.login = login;
        this.password = password;
        if (role.equals("ADMIN"))
        {
            this.admin = true;
        } else this.admin = false;

    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        if (admin) {
            return "ADMIN";
        } else {
            return "USER";
        }
    }

    public void setRole(String role) {

        if (role.equals("ADMIN")) {
            admin = true;
        } else  {
            admin = false;
        }
    }

    /*@Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", role='" + getRole() + '\'' +
                '}';
    }*/
}
