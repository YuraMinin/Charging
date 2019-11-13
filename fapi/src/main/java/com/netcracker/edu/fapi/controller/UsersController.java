package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.Datasource;
import com.netcracker.edu.fapi.models.Identification;
import com.netcracker.edu.fapi.models.Product;
import com.netcracker.edu.fapi.models.User;
//import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UsersController {


    @Autowired
    private Datasource data;

    @GetMapping
    public List<User> getAllUsers(){
        return data.getUsers();
    }


    @GetMapping("/{id}")
    public User getUser(@PathVariable Integer id){
        return data.getUser(id);
    }

    //Create User
    @PostMapping
    public Integer createUser(@Valid @RequestBody Identification user) {
        return data.addUser(user);
    }

    @PutMapping("/{id}")
    public User modifyUser(@PathVariable Integer id, @RequestBody User user) {
        return data.modifyUser(user, id);
    }

    @PostMapping("/authorization")
    public Integer authorizationUser(@RequestBody Identification user) {
        return data.authorizationUser(user.login, user.password);
    }


}
