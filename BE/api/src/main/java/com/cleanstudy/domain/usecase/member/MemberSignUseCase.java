package com.cleanstudy.domain.usecase.member;

import com.cleanstudy.authentication.provider.JwtTokenProvider;
import com.cleanstudy.domain.entity.member.Member;
import com.cleanstudy.domain.entity.member.MemberRole;
import com.cleanstudy.domain.usecase.UseCase;
import com.cleanstudy.http.dto.member.MemberSignInDto;
import com.cleanstudy.http.dto.member.MemberSignUpDto;
import com.cleanstudy.repository.member.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;


@UseCase
@RequiredArgsConstructor
public class MemberSignUseCase {

    private final MemberJpaRepository memberJpaRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public long signUp(MemberSignUpDto.Request memberSignUpRequest){
        System.out.println(memberSignUpRequest.getPassword());
        Member member = Member.builder()
                .accountId(memberSignUpRequest.getAccountId())
                .password(passwordEncoder.encode(memberSignUpRequest.getPassword()))
                .roles(Collections.singletonList(MemberRole.ROLE_MEMBER.toString()))
                .dateBirth(memberSignUpRequest.getDateBirth())
                .name(memberSignUpRequest.getName())
                .email(memberSignUpRequest.getEmail())
                .nickname(memberSignUpRequest.getNickname())
                .phoneNumber(memberSignUpRequest.getPhoneNumber())
                .build();
        memberJpaRepository.save(member);
        return member.getMemberId();
    }

    public String signIn(MemberSignInDto.Request memberSignUpRequest) {
        Member member = memberJpaRepository.findByAccountId(memberSignUpRequest.getAccountId()).get();
        if(!passwordEncoder.matches(memberSignUpRequest.getPassword(), member.getPassword()))
            return "dasdas";
        return jwtTokenProvider.createToken(String.valueOf(member.getMemberId()), member.getRoles());
    }
}
