package com.cleanstudy.http.dto.member;

import com.cleanstudy.domain.entity.member.MemberRole;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

public class MemberReadDto {

    @Data
    @Builder
    public static class Response{
        private Long memberId;
        private String accountId;
        private String password;
        private String nickname;
        private String email;
        private String phoneNumber;
        private MemberRole authority;
        private String name;
        private LocalDate dateBirth;
    }
}
