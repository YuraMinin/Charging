package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    // For Admin Account
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping(value = "", params = {"offset", "limit"})
    public List<User> getAllUsers(@RequestParam("offset") int offset,
                                  @RequestParam("limit") int limit){

        return userService.findAll(offset, limit);
    }

    // For Admin Account
    @GetMapping("/count")
    public Integer getCountUser(){

        return userService.count();
    }

    // For Admin Account
    // Change role users
    @PutMapping(value = "/{id}/admins")
    public void managementAdmin(@PathVariable Integer id,
                                @RequestBody String role) {

        userService.changeRole(id, Boolean.valueOf(role));
    }

    // Unknown
    @GetMapping("/login/{login}")
    public Integer getUserByLogin(@PathVariable String login) {

        return userService.findByLogin(login).id;
    }

    // For User Account
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{id}")
    public User getUser(@PathVariable Integer id){

        return userService.findById(id);
    }

    // Sign Up
    @RequestMapping(value="/up", method = RequestMethod.POST, produces = "application/json")
    public Integer saveUser(@RequestBody User user){
        return userService.save(user).id;
    }
}
