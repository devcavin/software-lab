package io.github.devcavin.roasteryops.repository;

import io.github.devcavin.roasteryops.entity.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CoffeeRepository extends JpaRepository<Coffee, UUID> { }
