package com.cleanstudy.http.dto.member;

import com.cleanstudy.http.dto.common.SuccessResponse;
import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import lombok.*;

import javax.validation.constraints.NotEmpty;

public class MemberSignInDto {

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    @ApiModel("로그인 요청")
    @JsonInclude(JsonInclude.Include.ALWAYS)
    @EqualsAndHashCode
    public static class Request{
        @NotEmpty
        String id;

        @NotEmpty
        String pw;
    }

    @Data
    @AllArgsConstructor
    public static class Response {
        private String token;
    }
}
