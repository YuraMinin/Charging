package com.netcracker.edu.be.config;

import com.netcracker.edu.be.service.WriteOffService;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class WriteOffJob implements Job {

    @Autowired
    private WriteOffService writeOffService;

    public void execute(JobExecutionContext context) throws JobExecutionException {

        writeOffService.blockedUser();
        writeOffService.writeOffMoney();

    }

}
