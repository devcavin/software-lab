package domain.entity;

import java.util.UUID;

public class Book {
    private final UUID id;
    private final String title;
    private final String author;
    private final String description;
    private BookStatus status;

    public Book(String title, String author, String description) {
        this.id = UUID.randomUUID();
        this.title = title;
        this.author = author;
        this.description = description;
        this.status = BookStatus.AVAILABLE;
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getDescription() {
        return description;
    }

    public BookStatus getStatus() {
        return status;
    }

    public void markAsBorrowed() {
        if (status != BookStatus.AVAILABLE) {
            throw new IllegalStateException("Book must be of the AVAILABLE status to be BORROWED");
        }
        this.status = BookStatus.BORROWED;
    }

    public void markAsReturned() {
        if (status != BookStatus.BORROWED) {
            throw new IllegalStateException("Book must be of the BORROWED status to be RETURNED");
        }
        this.status = BookStatus.RETURNED;
    }

    public void markAsNotAvailable() {
        if (status != BookStatus.RETURNED) throw new IllegalStateException("Book isn't available when not RETURNED " +
                "yet");
        this.status = BookStatus.NOT_AVAILABLE;
    }
}
