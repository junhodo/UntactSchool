package com.cleanstudy.http.dto.member;

import com.cleanstudy.http.dto.common.SuccessResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

public class MemberSignInDto {

    @Data
    public static class Request{
        String id;
        String pw;
    }

    @Data
    @AllArgsConstructor
    public static class Response {
        private String token;
    }
}
