package com.cloneCT.user.mapper;

import com.cloneCT.user.dto.LoginRequest;
import com.cloneCT.user.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    
    UserDto login(LoginRequest loginRequest);
}