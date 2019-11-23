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

    /*@OneToMany(mappedBy = "SubscriptionON")
    private List<UsersSubscriptions> subscriptionON;*/

    public Subscriptions() {}

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

}
