package com.netcracker.edu.be.repository;

import com.netcracker.edu.be.entity.BillingAccounts;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillingAccountRepository extends CrudRepository<BillingAccounts, Integer> {
}
