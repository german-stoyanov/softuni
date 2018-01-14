import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ChangeToUppercase {

    public static void main(String[] args) {
        String inputLine = new Scanner(System.in).nextLine();

        Pattern pattern = Pattern.compile("<upcase>(.+?)<\\/upcase>");
        Matcher matcher = pattern.matcher(inputLine);

        while(matcher.find()) {
            inputLine = inputLine.replace(matcher.group(), matcher.group(1).toUpperCase());
        }

        System.out.println(inputLine);
    }
}