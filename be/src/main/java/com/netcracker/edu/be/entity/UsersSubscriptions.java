package com.netcracker.edu.be.entity;

import javax.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "users_subscriptions")
public class UsersSubscriptions {

    @Id
    private Integer id;

    @Column(name = "period_on")
    private String period;

    @Column(name = "time_on")
    private LocalTime timeOn;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "subscription_id")
    private Subscriptions subscription;

    public UsersSubscriptions() {}

    public Integer getId() {
        return subscription.getId();
    }

    public void setId(Integer id) {
        this.subscription.setId(id);
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public LocalTime getTimeOn() {
        return timeOn;
    }

    public void setTimeOn(LocalTime timeOn) {
        this.timeOn = timeOn;
    }



    /*public Subscriptions getSubscriptions() {
        return subscription;
    }

    public void setSubscriptions(Subscriptions subscriptions) {
        this.subscription = subscriptions;
    }*/

    @Override
    public String toString() {
        return "subscriptions [id=" + id + ", name=" + subscription.getName() + ", cost=" + subscription.getCost()
                + ", period=" + period + "]";
    }


}