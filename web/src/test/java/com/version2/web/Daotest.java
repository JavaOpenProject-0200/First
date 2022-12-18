package com.version2.web;

import com.version2.web.vo.dao.UserMapper;
import com.version2.web.vo.dto.UserDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest
public class Daotest {
    @Autowired
    private UserMapper uMapper;

    @Test
    public void userTest() {
        UserDto user = new UserDto();
        user.setUserId("halee3");
        user.setUserPw("1234");
        user.setUserName("이하운");
        user.setUserEmail("abcd");
        user.setUserGender("남");
        uMapper.insertUser(user);
    }
}