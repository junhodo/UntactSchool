package com.cleanstudy.validator.annotation;

import com.cleanstudy.validator.impl.format.TelephoneFormatValidator;

import javax.validation.Constraint;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = TelephoneFormatValidator.class)
public @interface Telephone {
    String message() default "올바른 휴대폰 번호가 아님";
    Class[] groups() default {};
    Class[] payload() default {};
}
