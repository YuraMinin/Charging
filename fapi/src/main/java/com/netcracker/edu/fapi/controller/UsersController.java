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
    private UserService userService;

    @GetMapping
    public List<UserEntity> getAllUsers(){

        return userService.findAll();
    }

    @GetMapping("/{id}")
    public UserEntity getUser(@PathVariable Integer id){

        return userService.findById(id);
    }

    //Create User
    @PostMapping
    public Integer createUser(@Valid @RequestBody UserEntity user) {

        System.out.println("Email" + user.email);
        return userService.save(user).id;
    }

    @PostMapping("/authorization")
    public Integer authorizationUser(@RequestBody UserEntity user) {

        return userService.authorization(user).id;
    }


}
