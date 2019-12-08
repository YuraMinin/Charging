package com.netcracker.edu.be.controller;

import com.netcracker.edu.be.entity.Subscriptions;
import com.netcracker.edu.be.entity.Users;
import com.netcracker.edu.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
        System.out.println(user.getFirstName() + user.getLastName() + user.getPassword() + user.getLogin() + user.getEmail());
        return userService.save(user);
    }

    @RequestMapping(value = "/authorization", method = RequestMethod.POST)
    public Users authorizationUser(@RequestBody Users user) {

        return userService.authorization(user);
    }

    @PutMapping(value = "/{id}/admins")
    public void managementAdmin(@PathVariable(name = "id") Integer id,
                                @Valid @RequestBody Boolean status) {
        userService.managementAdmin(id, status);
    }


    /*@GetMapping(value = "", params = {"offset", "limit"})
    public List<Subscriptions> getAllSubscriptions(@RequestParam("offset") int offset,
                                          @RequestParam("limit") int limit){

        return userService.findAll(offset, limit);
    }*/




}
