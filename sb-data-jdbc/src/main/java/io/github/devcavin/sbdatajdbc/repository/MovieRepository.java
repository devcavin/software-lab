package io.github.devcavin.sbdatajdbc.repository;

import io.github.devcavin.sbdatajdbc.entity.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie, Long> {
    public Movie findByTitle(String title);
    public Movie findById(long id);
}
