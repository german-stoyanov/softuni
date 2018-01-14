package todolist.entity;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {
    private String title;

    private String comments;

    public Task () {
    }

    public Task(String title, String comments) {
        this.title = title;
        this.comments = comments;
    }

    @Column(nullable = false)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(columnDefinition = "text", nullable = false)
    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
