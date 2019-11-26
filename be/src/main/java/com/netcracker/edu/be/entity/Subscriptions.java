package com.netcracker.edu.be.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Subscriptions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name_subscription")
    private String name;

    private int cost;

    @OneToMany(mappedBy = "subscription")
    private List<UsersSubscriptions> subscriptions;

    public Subscriptions() {}

    public Subscriptions(String name, int cost) {
        this.name = name;
        this.cost = cost;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public void addSubscription(UsersSubscriptions usersSubscription) {
        subscriptions.add(usersSubscription);
    }

}
