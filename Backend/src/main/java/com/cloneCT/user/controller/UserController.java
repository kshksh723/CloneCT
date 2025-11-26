package com.cloneCT.user.controller;

import com.cloneCT.user.dto.LoginRequest;
import com.cloneCT.user.dto.UserDto;
import com.cloneCT.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        log.info("로그인 시도: {}", loginRequest.getEmail());

        UserDto userDto = userService.login(loginRequest);

        if (userDto != null) {
            log.info("로그인 성공: {}", userDto.getName());
            
            return ResponseEntity.ok(userDto);
        } else {
            log.info("로그인 실패 - 계정 없음 또는 비번 불일치");

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("아이디 또는 비밀번호를 확인해주세요.");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        log.info("로그아웃 요청됨");

        return ResponseEntity.ok("로그아웃 되었습니다.");
    }
}