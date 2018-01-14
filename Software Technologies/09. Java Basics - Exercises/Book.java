public class Book {
    private String title;
    private String author;
    private String publisher;
    private String releaseDate;
    private String ISBNnumber;
    private Double price;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getISBNnumber() {
        return ISBNnumber;
    }

    public void setISBNnumber(String ISBNnumber) {
        this.ISBNnumber = ISBNnumber;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Book(String title, String author, String publisher, String releaseDate, String ISBNnumber, Double price) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.releaseDate = releaseDate;
        this.ISBNnumber = ISBNnumber;
        this.price = price;
    }
}
