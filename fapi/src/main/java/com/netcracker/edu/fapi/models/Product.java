package com.netcracker.edu.fapi.models;

public class Product {
    // product == subscription

    private int id;
    private String name;
    private boolean status = false;
    private int cost;
    private long period = 0;

    Product(int idProduct, String nameProduct, int costProduct) {
        this.id = idProduct;
        this.name = nameProduct;
        this.cost = costProduct;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Boolean isStatus() {
        return status;
    }

    public int getCost() {
        return cost;
    }

    public long getPeriod() {
        return period;
    }

    public void setStatusProduct() {
        status = !status;
    }

    public void setPeriod(int period) {
        this.period = period;
    }
}
