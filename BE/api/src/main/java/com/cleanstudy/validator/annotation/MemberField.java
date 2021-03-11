package com.cleanstudy.validator.annotation;

import org.hibernate.validator.constraints.CompositionType;
import org.hibernate.validator.constraints.ConstraintComposition;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.Constraint;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

public class MemberField {

    @ConstraintComposition(CompositionType.AND)
    @Target(ElementType.FIELD)
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = { })
    @Size(min = 3, max = 20)
    @NotEmpty
    public @interface AccountId{
        String message() default "";
        Class[] groups() default {};
        Class[] payload() default {};
    }

    @ConstraintComposition(CompositionType.AND)
    @Target(ElementType.FIELD)
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = { })
    @Size(min = 8, max = 20)
    @NotEmpty
    public @interface Password{
        String message() default "";
        Class[] groups() default {};
        Class[] payload() default {};
    }

    @ConstraintComposition(CompositionType.AND)
    @Target(ElementType.FIELD)
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = { })
    @Size(min = 3, max = 20)
    @NotEmpty
    public @interface Name{
        String message() default "";
        Class[] groups() default {};
        Class[] payload() default {};
    }

    @ConstraintComposition(CompositionType.AND)
    @Target(ElementType.FIELD)
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = { })
    @Size(min = 3, max = 20)
    @NotEmpty
    public @interface NickName{
        String message() default "";
        Class[] groups() default {};
        Class[] payload() default {};
    }
}
