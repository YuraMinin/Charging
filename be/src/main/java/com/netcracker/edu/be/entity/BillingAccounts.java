package com.netcracker.edu.be.entity;

import javax.persistence.*;

@Entity
@Table(name = "billing_accounts")
public class BillingAccounts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "number_card")
    private String numberCard;

    private int amount;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users billing;

    public BillingAccounts() {}

    public BillingAccounts(String numberCard, Users user) {
        this.numberCard = numberCard;
        this.amount = 0;
        this.billing = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumberCard() {
        return numberCard;
    }

    public void setNumberCard(String numberCard) {
        this.numberCard = numberCard;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount += amount;
    }

}
