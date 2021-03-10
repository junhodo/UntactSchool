package com.cleanstudy.http.dto.member;

import com.cleanstudy.domain.entity.member.MemberAuthority;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
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
        private MemberAuthority authority;
        private String name;
        private LocalDate dateBirth;
    }
}
