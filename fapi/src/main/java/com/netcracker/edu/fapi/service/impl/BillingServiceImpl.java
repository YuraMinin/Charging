package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.BillingService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class BillingServiceImpl implements BillingService {

    public boolean transferMoney(Integer id, Integer amount){
        RestTemplate restTemplate = new RestTemplate();
        Boolean transfer = restTemplate.postForEntity("http://localhost:8081/api/users/" + id
                + "/billing/transfer", amount, Boolean.class).getBody();

        return transfer;
    }

    public void changeStatusUser(Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.put("http://localhost:8081/api/users/" + id, null);
    }
}
