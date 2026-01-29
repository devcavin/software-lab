package io.github.devcavin.sbdatajdbc.dto;

import java.time.LocalDate;

public record CreateMovie(
        String title,
        String description,
        LocalDate releaseDate
) { }