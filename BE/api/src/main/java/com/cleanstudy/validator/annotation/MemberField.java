package com.cleanstudy.validator.annotation;

import org.hibernate.validator.constraints.CompositionType;
import org.hibernate.validator.constraints.ConstraintComposition;

import javax.validation.Constraint;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

public class MemberField {

    @ConstraintComposition(CompositionType.AND)
    @NotEmpty
    @Target(ElementType.FIELD)
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = { })
    public @interface Name{
        String message() default "";
        Class[] groups() default {};
        Class[] payload() default {};
    };

    @ConstraintComposition(CompositionType.AND)
    @NotEmpty
    @Target(ElementType.FIELD)
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = { })
    public @interface NickName{
        String message() default "";
        Class[] groups() default {};
        Class[] payload() default {};
    };
}
