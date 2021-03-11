package com.cleanstudy.repository.member;

import com.cleanstudy.domain.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberJpaRepository extends JpaRepository<Member, Long> {
    Optional<Member> findById(Long id);
    Member save(Member member);
    Optional<Member> findByAccountId(String accountId);
}
