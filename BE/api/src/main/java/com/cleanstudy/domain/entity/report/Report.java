package com.cleanstudy.domain.entity.report;

import com.cleanstudy.domain.entity.BaseEntity;
import com.cleanstudy.domain.entity.member.Member;
import com.cleanstudy.validator.annotation.ReporterField;
import lombok.Builder;
import lombok.Getter;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Validated
public class Report extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reporter_id")
    @NotNull
    private Member reporter;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reported_id")
    @NotNull
    private Member reported;

    @Column(length = 255)
    @ReporterField.Content
    private String content;

    @Column
    private ReportType reportType;

    @Column
    private ReportProcessStatus reportProcessStatus;

    protected Report() {
    }

    @Builder
    public Report(Long id, Member reporter, Member reported, String content, ReportType reportType, ReportProcessStatus reportProcessStatus) {
        this.id = id;
        this.reporter = reporter;
        this.reported = reported;
        this.content = content;
        this.reportType = reportType;
        this.reportProcessStatus = reportProcessStatus;
    }
}
