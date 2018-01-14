package todolist.bindingModel;

import javax.validation.constraints.NotNull;

public class TaskBindingModel {
    @NotNull
    private String title;

    @NotNull
    private String comments;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
