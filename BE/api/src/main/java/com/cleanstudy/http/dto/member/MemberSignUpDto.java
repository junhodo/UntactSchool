package com.cleanstudy.http.dto.member;

import com.cleanstudy.domain.entity.member.MemberAuthority;
import com.cleanstudy.validator.annotation.Telephone;
import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
import lombok.*;
import org.apache.tomcat.jni.Local;
import org.springframework.context.annotation.Bean;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class MemberSignUpDto {

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    @ApiModel("회원 가입 요청")
    @JsonInclude(JsonInclude.Include.ALWAYS)
    @EqualsAndHashCode
    public static class Request{
        @NotEmpty
        private String id;

        @NotEmpty
        private String password;

        @NotEmpty
        private String nickname;

        @Email
        @NotEmpty
        private String email;

        @NotEmpty
        @Telephone
        private String phoneNumber;

        private String name;

        @DateTimeFormat
        private LocalDate dateBirth;
    }
}
