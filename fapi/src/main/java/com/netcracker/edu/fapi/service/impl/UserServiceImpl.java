package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.BillingAccount;
import com.netcracker.edu.fapi.models.UserEntity;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    /*@Value("${backend.server.url}")
    private String backendServerUrl;*/

    @Override
    public List<UserEntity> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        UserEntity[] userResponse = restTemplate.getForObject("http://localhost:8081/api/users", UserEntity[].class);
        return userResponse == null ? Collections.emptyList() : Arrays.asList(userResponse);
    }

    @Override
    public UserEntity findById(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        UserEntity user = restTemplate.getForObject("http://localhost:8081/api/users/" + id,
                UserEntity.class);
        /*Integer amountMoney = restTemplate.getForObject("http://localhost:8081/api/users/" + id + "/billing",
                BillingAccount.class).amount;*/
        if (user != null) {
            user.password = null;
            user.login = null;
            // user.balance = amountMoney;
        }
        return user;
    }

    @Override
    public UserEntity save(UserEntity user) {
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
        } else return newUser;

    }
}
