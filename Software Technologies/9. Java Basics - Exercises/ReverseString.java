import java.util.Scanner;

public class ReverseString {

    public static void main(String[] args) {
        String inputLine = new Scanner(System.in).nextLine();

        String reversedString = new StringBuilder(inputLine).reverse().toString();

        System.out.println(reversedString);
    }
}