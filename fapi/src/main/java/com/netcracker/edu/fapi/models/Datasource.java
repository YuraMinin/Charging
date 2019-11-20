package com.netcracker.edu.fapi.models;

import org.springframework.stereotype.Service;

import javax.jws.soap.SOAPBinding;
import java.util.ArrayList;
import java.util.List;

@Service
public class Datasource {
    private List<User> users = new ArrayList<>();
    private List<Product> products = new ArrayList<>();

    Datasource() {
        // Create users
        users.add(new User("Yura", "Minin", "yura", "1111",
                "1111 1111 1111 1111"));

        users.add(new User("Minin", "Yura", "yula", "1111",
                "1111 1111 1111 1111"));
        users.get(0).setId(1);
        users.get(1).setId(2);

        // Add subscription user
        products.add(new Product(1, "Word", 10));
        products.add(new Product(2, "Excel", 10));

    }

    // Get User_Id
    public User getUser(int idUser) {

        return users.get(idUser - 1);
    }

    // Get All_User
    public List<User> getUsers() {
        return users;
    }

    // Get All User_Id products
    public List<Product> getAllProductUser(int id) {
        List<Product> allProduct = new ArrayList<>();

        for (Product item: products) {
            allProduct.add(new Product(item.getId(), item.getName(), item.getCost()));
        }


        for (int i = 0; i < users.get(id - 1).getUserProducts().size(); i++) {

            int nProduct = users.get(id - 1).getUserProducts().get(i).getId() - 1;
            allProduct.get(nProduct).setStatusProduct();
        }

        return allProduct;

    }

    // Get All Products
    public List<Product> getProducts() {
        return this.products;
    }


    // Create User (POST method)
    public int addUser(Identification user) {
       boolean loginEqual = false;

        for (User item: users) {
            if (user.login.equals(item.getLogin())) {
                loginEqual = true;
                break;
            }
        }

        if (!loginEqual) {
            int newId = users.size();
            User newUser = new User(user.firstName, user.lastName, user.login, user.password, user.numberCard);
            users.add(newUser);
            users.get(newId).setId(newId + 1);
            return newId + 1;
        } else {
            return -1; // Login failed
        }
    }


    // Modify User (PUT method)
    public User modifyUser(User user, int id)
    {
        users.get(id - 1).setBlocked(user.isBlocked());
        return users.get(id - 1);
    }

    // Add product
    public void addProduct(Product newProduct){
        Product product = new Product(products.size() + 1, newProduct.getName(), newProduct.getCost());
        products.add(product);
    }

    public int authorizationUser(String login, String password) {
        if (login.equals("admin") && password.equals("777")) return 0;

        for (User item: users) {
            if (item.authorization(login, password)) {
                return item.getId();
            }
        }
        return -1;
    }

    public void modifySubscription(int id, Product product) {

        if (product.isStatus().equals(true)) users.get(id - 1).addProduct(product);
        else {
            users.get(id - 1).deleteProduct(product.getId());
            System.out.println("Delete");

        }
    }

    public boolean transferMoney(int id, Identification user) {
        return this.users.get(id - 1).addMoney(user.numberCard, user.amountTransfer);
    }

    public List<Product> getUserSubscriptions(int id, int limit, int offset) {
        int count = offset + limit;
        if (count > getAllProductUser(id).size()) {
            count = getAllProductUser(id).size();
        }
        return getAllProductUser(id).subList(offset, count);
    }

}
