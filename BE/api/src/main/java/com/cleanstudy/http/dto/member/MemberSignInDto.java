package com.cleanstudy.http.dto.member;

import com.cleanstudy.http.dto.common.SuccessResponse;
import com.cleanstudy.validator.annotation.MemberField;
import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
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
        @ApiModelProperty(example = "user")
        @MemberField.AccountId
        String accountId;

        @ApiModelProperty(example = "userpassword")
        @MemberField.Password
        String password;
    }

    @Data
    @AllArgsConstructor
    public static class Response {
        private String token;
    }
}
