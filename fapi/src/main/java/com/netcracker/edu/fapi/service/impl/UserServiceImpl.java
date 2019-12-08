package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.UserEntity;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public List<UserEntity> findAll(Integer offset, Integer limit) {

        List<UserEntity> users;

        RestTemplate restTemplate = new RestTemplate();
        UserEntity[] userResponse = restTemplate.getForObject("http://localhost:8081/api/users", UserEntity[].class);
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

    @Override
    public List<UserEntity> findAll() {
        List<UserEntity> users;

        RestTemplate restTemplate = new RestTemplate();
        UserEntity[] userResponse = restTemplate.getForObject("http://localhost:8081/api/users", UserEntity[].class);
        if (userResponse == null) {
            users = Collections.emptyList();
            return users;
        } else {
            users = Arrays.asList(userResponse);
            return users;
        }
    }

    @Override
    public UserEntity findById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        UserEntity user = restTemplate.getForObject("http://localhost:8081/api/users/" + id,
                UserEntity.class);

        if (user != null) {
            user.password = null;
            user.login = null;
        }
        return user;
    }

    @Override
    public UserEntity save(UserEntity user) {
        user.admin = false;
        RestTemplate restTemplate = new RestTemplate();
        UserEntity newUser =  restTemplate.postForEntity("http://localhost:8081/api/users", user, UserEntity.class)
                .getBody();
        if (newUser != null) {
            restTemplate.postForEntity("http://localhost:8081/api/users/" + newUser.id + "/billing", user, UserEntity.class).getBody();
        }
        return newUser;

    }

    public UserEntity authorization(UserEntity user) {
        // Admin
        if (user.login.equals("admin") && user.password.equals("777"))
        {
            UserEntity newuser = new UserEntity();
            newuser.id = 0;
            return newuser;
        }
        RestTemplate restTemplate = new RestTemplate();
        UserEntity newUser =  restTemplate.postForEntity("http://localhost:8081/api/users/authorization", user, UserEntity.class)
                .getBody();
        if (newUser == null) {
            UserEntity newuser = new UserEntity();
            newuser.id = -1;
            return newuser;
        } else if (newUser.admin.equals(true)) {
            newUser.id = 0;
            return newUser;
        }
        else return newUser;
    }

    public Integer count() {
        return findAll().size();
    }

    public void managementAdmin(Integer id, Boolean status) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.put("http://localhost:8081/api/users/" + id + "/admins", status);
    }



}
