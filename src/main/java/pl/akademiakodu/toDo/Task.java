package pl.akademiakodu.toDo;

public class Task {
    private String name;
    private String description;
    private boolean isFinished;

    public Task(String name, String description, boolean isFinished) {
        this.name = name;
        this.description = description;
        this.isFinished = isFinished;
    }

    public Task(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isFinished() {
        return isFinished;
    }

    public void setFinished(boolean finished) {
        isFinished = finished;
    }

    @Override
    public String toString() {
        return getName()+" "+getDescription()+

                (isFinished ?  " skończone" : " nieskończone");

    }
}
