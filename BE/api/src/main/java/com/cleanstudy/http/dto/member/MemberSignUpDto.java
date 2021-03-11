package com.cleanstudy.http.dto.member;

import com.cleanstudy.validator.annotation.MemberField;
import com.cleanstudy.validator.annotation.Telephone;
import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.time.LocalDate;

public class MemberSignUpDto {

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    @ApiModel("회원 가입 요청")
    @JsonInclude(JsonInclude.Include.ALWAYS)
    @EqualsAndHashCode
    public static class Request{

        @ApiModelProperty(example = "user")
        @MemberField.AccountId
        private String accountId;

        @ApiModelProperty(example = "userpassword")
        @MemberField.Password
        private String password;

        @ApiModelProperty(example = "nickname")
        @MemberField.NickName
        private String nickname;

        @ApiModelProperty(example = "email@kumoh.ac.kr")
        @Email
        private String email;

        @ApiModelProperty(example = "01012345678")
        @Telephone
        private String phoneNumber;

        @ApiModelProperty(example = "umjunsick")
        @MemberField.Name
        private String name;

        @ApiModelProperty(example = "1992-05-05")
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
        private LocalDate dateBirth;
    }
}
