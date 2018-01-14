import java.util.Scanner;

public class IndexOfLetters {

    public static void main(String[] args) {
        String inputLine = new Scanner(System.in).nextLine();

        for(int i = 0; i < inputLine.length(); i++) {
            char currentLetter = inputLine.charAt(i);

            System.out.printf("%s -> %s\n", inputLine.charAt(i), Character.getNumericValue(currentLetter) - 10);
        }
    }
}