import java.util.Collections;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CensorEmailAddress {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String emailPattern = scanner.nextLine();
        String text = scanner.nextLine();

        int censoredLettersCount = 0;

        for(int i = 0; i < emailPattern.length(); i++){
            if(emailPattern.charAt(i) == '@') {
                break;
            }

            censoredLettersCount++;
        }

        String domain = emailPattern.substring(censoredLettersCount); //skips the email pattern from the beggining to the start of the domain and get it to the end
        String censoredText = String.join("", Collections.nCopies(censoredLettersCount, "*")); //converting the censored text to asterisks

        text = text.replace(emailPattern,  censoredText + domain);

        System.out.println(text);
    }
}