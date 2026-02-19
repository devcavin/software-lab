package io.github.devcavin.roasteryops.dto;

import io.github.devcavin.roasteryops.entity.Coffee;

public record CoffeeResponse(
        String id,
        String name
) {
    public static CoffeeResponse from(Coffee data) {
        return new CoffeeResponse(data.getId().toString(), data.getName());
    }
}
