package io.github.devcavin.sbdatajdbc.dto;

import io.github.devcavin.sbdatajdbc.entity.Movie;

import java.time.LocalDate;

public record MovieResponse(
        Long id,
        String title,
        String description,
        LocalDate releaseDate
) {
    public static MovieResponse toResponse(Movie movie) {
        return new MovieResponse(
                movie.id(),
                movie.title(),
                movie.description(),
                movie.releaseDate()
        );
    }
}
