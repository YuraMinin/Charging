package com.netcracker.edu.fapi.models;

import java.util.ArrayList;
import java.util.List;

public class User {

    private int id;
    public String firstName;
    private String lastName;
    private String login;
    private String password;
    private String numberCard;
    private int balance = 0;
    private String email;
    private boolean blocked = false;


    /*private List<Integer> numberOnProducts = new ArrayList<>();*/
    private List<Product> numberOnProducts = new ArrayList<>();


    User(String firstName, String lastName, String login, String password, String numberCard) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.password = password;
        this.numberCard = numberCard;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getBalance() {
        return balance;
    }

    public String getLogin() { return this.login; }

    // Back-end methods
    // Transfer money
    public boolean addMoney(String numberCard, int amount) {
        if (this.numberCard.equals(numberCard)) {
            this.balance += amount;
            return true;
        } else {
            return false;
        }
    }

    public boolean authorization(String login, String password) {
        if (this.login.equals(login) && this.password.equals(password)) return true;
        else return false;
    }

    // User add Product
    public void addProduct(Product product) {
        numberOnProducts.add(product);
    }

    public void deleteProduct(int idProduct) {
        for(int i = 0; i < numberOnProducts.size(); i++) {
            if (numberOnProducts.get(i).getId().equals(idProduct)) {
                numberOnProducts.remove(i);
                break;
            }
        }
    }
    // User
    public List<Product> getUserProducts() {
        return this.numberOnProducts;
    }

    public void  setUserProducts(List<Product> numberOnProducts) {
        this.numberOnProducts = numberOnProducts;
    }

    public boolean isBlocked() {
        return blocked;
    }

    public int getId() {
        return id;
    }

    public void setBlocked(boolean blocked) {
        this.blocked = blocked;
    }

    public void invertBlocked() {
        this.blocked = !this.blocked;
    }
}
