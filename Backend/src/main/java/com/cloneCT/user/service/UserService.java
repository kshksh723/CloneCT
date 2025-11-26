package com.cloneCT.user.service;

import com.cloneCT.user.dto.LoginRequest;
import com.cloneCT.user.dto.UserDto;

public interface UserService {
    UserDto login(LoginRequest loginRequest);
}