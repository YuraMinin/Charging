package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.User;
import java.util.List;

public interface UserService {

    User findByLogin(String login);
    User findById(Integer id);
    List<User> findAll(Integer offset, Integer limit);
    User save(User user);
    Integer count();
    // role = true => ADMIN else role = false => USER
    void changeRole(Integer id, Boolean role);

}
