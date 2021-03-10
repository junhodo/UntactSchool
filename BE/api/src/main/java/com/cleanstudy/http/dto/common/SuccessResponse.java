package com.cleanstudy.http.dto.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
public class SuccessResponse<E> {
    private int code;
    private String message;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private E body;

    public SuccessResponse(int code, String message, E body) {
        this.code = code;
        this.message = message;
        this.body = body;
    }

    public SuccessResponse(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
