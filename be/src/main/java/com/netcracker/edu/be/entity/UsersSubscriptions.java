package com.netcracker.edu.be.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "users_subscriptions")
public class UsersSubscriptions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer IdSubscription;

    @Column(name = "period_on")
    private String period;

    @Column(name = "time_on")
    private LocalTime timeOn;

    @Column(name = "time_off")
    private LocalTime timeOff;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private Users user;

    @ManyToOne
    @JoinColumn(name = "subscription_id")
    private Subscriptions subscription;

    public UsersSubscriptions() {}

    public UsersSubscriptions(String period, Users user, Subscriptions subscription, LocalTime time,
                              LocalTime timeOff) {
        super();
        this.period = period;
        this.user = user;
        this.timeOn = time;
        this.timeOff = timeOff;
        this.subscription = subscription;
    }

    public Integer getIdSubscription() {
        return IdSubscription;
    }

    public void setIdSubscription(Integer idSubscription) {
        this.IdSubscription = idSubscription;
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

    // Test
    public Integer getid() {
        return subscription.getId();
    }

    public void setid(int id) {
        subscription.setId(id);
    }



    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }



    /*public Subscriptions getSubscriptions() {
        return subscription;
    }

    public void setSubscriptions(Subscriptions subscriptions) {
        this.subscription = subscriptions;
    }*/

    @Override
    public String toString() {
        return "subscriptions [IdSubscription=" + IdSubscription + ", name=" + subscription.getName() + ", cost=" + subscription.getCost()
                + ", period=" + period + "]";
    }

    public LocalTime getTimeOff() {
        return timeOff;
    }

    public void setTimeOff(LocalTime timeOff) {
        this.timeOff = timeOff;
    }


}
