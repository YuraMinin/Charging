package com.netcracker.edu.be;

import com.netcracker.edu.be.repository.SubscriptionRepository;
import com.netcracker.edu.be.repository.UserRepository;
import com.netcracker.edu.be.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BeApplication {

    public static void main(String[] args) {

        SpringApplication.run(BeApplication.class, args);

    }

}
