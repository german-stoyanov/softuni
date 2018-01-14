import java.util.ArrayList;

public class Library {
    private String name;
    private ArrayList<String> books;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getBooks() {
        return books;
    }

    public void setBooks(ArrayList<String> books) {
        this.books = books;
    }

    public Library(String name, ArrayList<String> books) {
        this.name = name;
        this.books = books;
    }
}
