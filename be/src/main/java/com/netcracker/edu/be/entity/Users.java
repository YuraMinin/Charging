package com.netcracker.edu.be.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column (name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String login;

    private String password;

    private String email;

    //public Integer amount = 15;

    @OneToMany(mappedBy = "user")
    private Set<UsersSubscriptions> userSubscriptions;

    @OneToMany(mappedBy = "billing")
    private List<BillingAccounts> billingAccounts;

    public Users() {}

    public List<BillingAccounts> getBillingAccounts() {
        return billingAccounts;
    }

    public void setBillingAccounts(List<BillingAccounts> billingAccounts) {
        this.billingAccounts = billingAccounts;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<UsersSubscriptions> getSubscriptions() {
        return userSubscriptions;
    }

    public void setSubscriptions(Set<UsersSubscriptions> subscriptions) {
        this.userSubscriptions= subscriptions;
    }
}
