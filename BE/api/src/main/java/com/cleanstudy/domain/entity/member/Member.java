package com.cleanstudy.domain.entity.member;

import com.cleanstudy.domain.entity.BaseEntity;
import com.cleanstudy.validator.annotation.MemberField;
import com.cleanstudy.validator.annotation.Telephone;
import lombok.Builder;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@Validated
public class Member extends BaseEntity implements UserDetails {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(unique = true, length = 20)
    @MemberField.AccountId
    private String accountId;

    @Column(length = 255, nullable = false)
    private String password;

    @Column(length = 20, nullable = false)
    @MemberField.NickName
    private String nickname;

    @Column(length = 20, nullable = false)
    @Email
    private String email;

    @Column(length = 20, nullable = false)
    @Telephone
    private String phoneNumber;

    @Column(length = 20, nullable = false)
    @MemberField.Name
    private String name;

    @Column
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate dateBirth;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    protected Member() {
    }

    @Builder
    public Member(Long memberId, String accountId, String password, String nickname, String email, String phoneNumber, String name, LocalDate dateBirth, List<String> roles) {
        this.memberId = memberId;
        this.accountId = accountId;
        this.password = password;
        this.nickname = nickname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.dateBirth = dateBirth;
        this.roles = roles;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return String.valueOf(this.memberId);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
