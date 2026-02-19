package io.github.devcavin.roasteryops.entity;

import io.github.devcavin.roasteryops.dto.CoffeeRequest;
import jakarta.persistence.*;

import java.util.Objects;
import java.util.UUID;

@Entity
public class Coffee {
    @Id @GeneratedValue(strategy = GenerationType.UUID) @Column(nullable = false)
    private final UUID id;

    @Column(nullable = false)
    private String name;


    public Coffee(String name) {
        this.id = UUID.randomUUID();
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Coffee coffee)) return false;
        return Objects.equals(id, coffee.id) && Objects.equals(name, coffee.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    @Override
    public String toString() {
        return "Coffee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    public static Coffee toEntity(CoffeeRequest entity) {
        return new Coffee(entity.name());
    }
}