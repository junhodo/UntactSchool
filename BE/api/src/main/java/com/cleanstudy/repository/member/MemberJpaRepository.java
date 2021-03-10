package com.cleanstudy.repository.member;

import com.cleanstudy.domain.entity.member.Member;
import com.cleanstudy.domain.entity.member.MemberAuthority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MemberJpaRepository extends JpaRepository<Member, Long> {
    Optional<Member> findById(Long id);
    Member save(Member member);
    Optional<Member> findByAccountId(String accountId);

}
