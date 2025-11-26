package com.cloneCT.user.service.impl;

import com.cloneCT.user.dto.LoginRequest;
import com.cloneCT.user.dto.UserDto;
import com.cloneCT.user.mapper.UserMapper;
import com.cloneCT.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    @Override
    public UserDto login(LoginRequest loginRequest) {
        
        return userMapper.login(loginRequest);
    }
}