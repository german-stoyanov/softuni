import java.util.*;

public class AverageGradesAndStudent {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int linesCount = Integer.parseInt(scanner.nextLine());
        ArrayList<Student> students = new ArrayList<>();

        for (int i = 0; i < linesCount; i++) {
            String data = scanner.nextLine();

            String name = data.split(" ")[0];
            data = data.replace(name + " ", "");
            double[] grades = Arrays.stream(data.split(" ")).mapToDouble(Double::parseDouble).toArray();

            Student currentStudent = new Student(name,grades);
            students.add(currentStudent);
        }

        Comparator<Student> nameComparator = (s1, s2) -> (s1.getName() + s1.getGrades().toString()).compareTo((s2.getName() + s2.getGrades().toString()));
        students.sort(nameComparator);

        for(Student student : students) {
            if(Arrays.stream(student.getGrades()).average().getAsDouble() >= 5.00) {
                String s = String.format("%.2f", Arrays.stream(student.getGrades()).average().getAsDouble()).replace(",", ".") ;
                System.out.printf("%s -> %s\n",student.getName(), s);// Arrays.stream(s.getGrades()).average().getAsDouble());
            }
        }
    }
}

class Student {
    private String name;
    private double[] grades;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double[] getGrades() {
        return grades;
    }

    public void setGrades(double[] grades) {
        this.grades = grades;
    }

    public Student(String name, double[] grades) {
        this.name = name;
        this.grades = grades;
    }
}





