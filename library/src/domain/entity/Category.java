package domain.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Category {
    private final UUID id;
    private final String name;
    private final String description;
    private final List<Book> books;

    public Category(String name, String description) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.description = description;
        this.books = new ArrayList<>();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public List<Book> getBooks() {
        return new  ArrayList<>(books);
    }
}
