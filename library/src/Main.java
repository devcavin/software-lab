import domain.entity.Book;
import domain.entity.Category;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("Mini library domain model");

        Category category = new Category(
                "Category A",
                "This is a description"
        );

        Book book = new Book(
                "Book A",
                "Author of book A",
                "Description of book A"
        );

        // category.addBook(book);
        List<Book> books = category.getBooks();

        for (Book book1 : books) {
            System.out.println(book1);
        }
    }
}