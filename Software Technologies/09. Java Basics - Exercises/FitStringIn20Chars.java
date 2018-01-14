import java.util.Scanner;

public class FitStringIn20Chars {

    public static void main(String[] args) {
        String inputLine = new Scanner(System.in).nextLine();

        StringBuilder text = new StringBuilder(inputLine);

        int total = 20 - text.length();

        for (int i = 0; i < total; i++){
            text.append('*');
        }

        System.out.println(text.substring(0,20));
    }
}