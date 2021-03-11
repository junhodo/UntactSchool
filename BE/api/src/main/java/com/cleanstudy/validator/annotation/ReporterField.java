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

public class ReporterField {

    @ConstraintComposition(CompositionType.AND)
    @Target(ElementType.FIELD)
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = { })
    @Size(min = 10, max = 255)
    @NotEmpty
    public @interface Content{
        String message() default "";
        Class[] groups() default {};
        Class[] payload() default {};
    }
}
