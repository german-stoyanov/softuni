import java.util.Scanner;

public class VowelOrDigit {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Character letter = scanner.next().charAt(0);

        if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
            System.out.println("vowel");
        } else if (Character.isDigit(letter)) {
            System.out.println("digit");
        } else {
            System.out.println("other");
        }
    }
}