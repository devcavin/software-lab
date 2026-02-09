package domain.entity;

import java.util.Map;
import java.util.UUID;

public class Shelf {
    private final UUID id;
    private final String name;

    // categories of books

    public Shelf(String name) {
        this.id = UUID.randomUUID();
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
