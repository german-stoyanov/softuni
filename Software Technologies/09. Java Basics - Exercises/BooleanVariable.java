import java.util.Scanner;

public class BooleanVariable {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        boolean boolVar = Boolean.valueOf(scanner.nextLine());

        if(boolVar) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
