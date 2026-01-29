package io.github.devcavin.sbdatajdbc.entity;

import io.github.devcavin.sbdatajdbc.dto.CreateMovie;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;

@Table(name = "movies")
public record Movie(
        @Id Long id,
        String title,
        String description,
        @Column("release_date")LocalDate releaseDate
        ) {
    public static Movie from(CreateMovie createMovie) {
        return new Movie(
                null, createMovie.title(), createMovie.description(), createMovie.releaseDate()
        );
    }
}