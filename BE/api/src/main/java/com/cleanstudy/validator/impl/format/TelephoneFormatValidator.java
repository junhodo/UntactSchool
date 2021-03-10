package com.cleanstudy.validator.impl.format;

import com.cleanstudy.validator.annotation.Telephone;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class TelephoneFormatValidator implements ConstraintValidator<Telephone, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if(value == null)
            return false;
        return value.matches("(01[016789])(\\d{3,4})(\\d{4})");
    }
}
