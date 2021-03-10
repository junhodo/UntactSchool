package com.cleanstudy.http.api.member;

import com.cleanstudy.domain.entity.member.Member;
import com.cleanstudy.domain.usecase.member.MemberReadUseCase;
import com.cleanstudy.domain.usecase.member.MemberSignUseCase;
import com.cleanstudy.http.dto.common.SuccessResponse;
import com.cleanstudy.http.dto.member.MemberReadDto;
import com.cleanstudy.http.dto.member.MemberSignInDto;
import com.cleanstudy.http.dto.member.MemberSignUpDto;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MemberApiController {

    private final MemberSignUseCase memberSignUseCase;
    private final MemberReadUseCase memberReadUseCase;

    @ApiOperation(value = "사용자 등록")
    @PostMapping("/api/v1/signup")
    public SuccessResponse signUp(@ApiParam("사용자 등록") @Valid @RequestBody MemberSignUpDto.Request memberSignUpRequest){
        Long id = memberSignUseCase.signUp(memberSignUpRequest);
        return new SuccessResponse(200,"ok", id);
    }

    @ApiOperation(value = "로그인")
    @PostMapping("/api/v1/signin")
    public SuccessResponse signIn(@ApiParam("사용자 로그인") @Valid @RequestBody MemberSignInDto.Request memberSignUpRequest){
        String token = memberSignUseCase.signIn(memberSignUpRequest);
        return new SuccessResponse(200,"ok", new MemberSignInDto.Response(token));
    }


    @ApiOperation(value = "사용자 조회")
    @GetMapping("/api/v1/member/{id}")
    public SuccessResponse readMember(@ApiParam(value = "사용자 정보 조회", example = "1") @PathVariable(value = "id") Long id){
        Member member = memberReadUseCase.read(id);
        MemberReadDto.Response res = MemberReadDto.Response.builder()
                .memberId(member.getMemberId())
                .accountId(member.getAccountId())
                .name(member.getName())
                .dateBirth(member.getDateBirth())
                .password(member.getPassword())
                .authority(member.getAuthority())
                .email(member.getEmail())
                .memberId(member.getMemberId())
                .nickname(member.getNickname())
                .phoneNumber(member.getPhoneNumber())
                .build();
        return new SuccessResponse(200,"ok", res);
    }

}
