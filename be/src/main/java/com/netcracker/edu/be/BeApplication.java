package com.netcracker.edu.be;

import com.netcracker.edu.be.config.WriteOffJob;
import com.netcracker.edu.be.repository.SubscriptionRepository;
import com.netcracker.edu.be.repository.UserRepository;
import com.netcracker.edu.be.entity.*;
import com.netcracker.edu.be.service.WriteOffService;
import com.netcracker.edu.be.service.impl.WriteOffServiceImpl;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

import static org.quartz.JobBuilder.newJob;
import static org.quartz.SimpleScheduleBuilder.simpleSchedule;
import static org.quartz.TriggerBuilder.newTrigger;

@SpringBootApplication
@EnableScheduling
public class BeApplication {



    public static void main(String[] args) {

        /*JobDetail jd = new JobDetail();
        jd*/

        SpringApplication.run(BeApplication.class, args);

        /*Thread money = new Thread(new WriteOffServiceImpl(), "MyThread");
        money.start();*/



    }


}
