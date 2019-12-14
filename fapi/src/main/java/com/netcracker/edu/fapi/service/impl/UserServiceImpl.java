package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service("customUserDetailsService")
public class UserServiceImpl implements UserDetailsService, UserService {


    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User findByLogin(String login) {

        RestTemplate restTemplate = new RestTemplate();
        User user = restTemplate.getForObject("http://localhost:8081/api/users/auth/" + login,
                User.class);
        if (user.admin.equals(true)) user.id = 0;
        return user;
    }

    @Override
    public User findById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        User user = restTemplate.getForObject("http://localhost:8081/api/users/" + id,
                User.class);

        return user;
    }

    private List<User> findAll() {
        List<User> users;

        RestTemplate restTemplate = new RestTemplate();
        User[] userResponse = restTemplate.getForObject("http://localhost:8081/api/users", User[].class);
        if (userResponse == null) {
            users = Collections.emptyList();
            return users;
        } else {
            users = Arrays.asList(userResponse);
            return users;
        }
    }

    @Override
    public List<User> findAll(Integer offset, Integer limit) {

        List<User> users;

        RestTemplate restTemplate = new RestTemplate();
        User[] userResponse = restTemplate.getForObject("http://localhost:8081/api/users", User[].class);
        if (userResponse == null) {
            users = Collections.emptyList();
            return users;
        } else {
            users = Arrays.asList(userResponse);
            int count = offset + limit;
            if (count > users.size()) {
                count = users.size();
            }

            return users.subList(offset, count);
        }
    }

    public Integer count() {

        return findAll().size();
    }

    @Override
    public void changeRole(Integer id, Boolean role) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.put("http://localhost:8081/api/users/" + id + "/admins", role);
    }


    @Override
    public User save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        System.out.println(user.firstName);
        user.setRole("USER");
        RestTemplate restTemplate = new RestTemplate();
        User newUser =  restTemplate.postForEntity("http://localhost:8081/api/users", user, User.class).getBody();

        if (newUser != null) {
            restTemplate
                    .postForEntity("http://localhost:8081/api/users/" + newUser.id + "/billing", user, User.class)
                    .getBody();
        }
        return newUser;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByLogin(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole()));
        return authorities;
    }

}
