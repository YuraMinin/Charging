package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.*;
//import com.netcracker.edu.fapi.service.UserService;
import com.netcracker.edu.fapi.service.UserService;
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

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserEntity> getAllUsers(){
        //return data.getUsers();
        return userService.findAll();
    }

    // Delete
    @GetMapping("/old")
    public List<User> getAllUsersOlD(){
        return data.getUsers();
        //return userService.findAll();
    }

    @GetMapping("/{id}")
    public UserEntity getUser(@PathVariable Integer id){
        //return data.getUser(id);
        return userService.findById(id);
    }

    //Create User
    @PostMapping
    public Integer createUser(@Valid @RequestBody UserEntity user) {
        //return data.addUser(user);
        return userService.save(user).id;
    }

    @PutMapping("/{id}")
    public User modifyUser(@PathVariable Integer id,
                           @RequestBody User user) {
        return data.modifyUser(user, id);
    }

    @PostMapping("/authorization")
    public Integer authorizationUser(@RequestBody UserEntity user) {
        //return data.authorizationUser(user.login, user.password);
        return userService.authorization(user).id;
    }


}
