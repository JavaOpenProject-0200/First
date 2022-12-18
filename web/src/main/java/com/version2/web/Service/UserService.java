package com.version2.web.Service;

import java.util.List;
import com.version2.web.vo.dto.UserDto;

public interface UserService {
    public boolean login(String userId, String userPw);

    public boolean join(UserDto user);

    public void modify(UserDto user);

    public void withdraw(String userId, String userPw);

    public UserDto getUser(String userId);

    public List<UserDto> getUserList();
}
