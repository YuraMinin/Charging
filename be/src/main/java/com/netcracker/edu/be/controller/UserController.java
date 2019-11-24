package com.netcracker.edu.be.controller;

import com.netcracker.edu.be.entity.Subscriptions;
import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.repository.UserRepository;
import com.netcracker.edu.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Users> getAllUsers() {
        return  userService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Users> getUser(@PathVariable(name = "id") Integer id) {
        return userService.findById(id);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Users createUser(@RequestBody Users user) {
        return userService.save(user);
    }

    @RequestMapping(value = "/authorization", method = RequestMethod.POST)
    public Users authorizationUser(@RequestBody Users user) {
        return userService.authorization(user);
    }




}