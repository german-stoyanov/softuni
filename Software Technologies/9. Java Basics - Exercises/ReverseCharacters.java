import java.util.Scanner;

public class ReverseCharacters {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String firstLetter = scanner.next();
        String secondLetter = scanner.next();
        String thirdLetter = scanner.next();

        System.out.println(thirdLetter + secondLetter + firstLetter);
    }
}