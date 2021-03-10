package com.cleanstudy.domain.usecase.member;

import com.cleanstudy.domain.entity.member.Member;
import com.cleanstudy.domain.usecase.UseCase;
import com.cleanstudy.repository.member.MemberJpaRepository;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@UseCase
@RequiredArgsConstructor
public class MemberReadUseCase {

    private final MemberJpaRepository memberJpaRepository;

    public Member read(Long id){
        Optional<Member> member = memberJpaRepository.findById(id);
        return member.get();
    }
}
