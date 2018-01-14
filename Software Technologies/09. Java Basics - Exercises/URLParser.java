import jdk.nashorn.internal.runtime.regexp.joni.Regex;

import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class URLParser {

    public static void main(String[] args) {
        String inputLine = new Scanner(System.in).nextLine();
       // String inputLine = "https://www.softuni.bg/Resources/Materials";

        String protocol = "";
        String recourse = "";

        if(inputLine.contains(":")){
            protocol = inputLine.split(":")[0];
            inputLine = inputLine.replace(protocol + "://", "");
        }

        //System.out.println(inputLine);
        String server = inputLine.split("/")[0];
        inputLine = inputLine.replace(server, "");

        if(inputLine.length() > 0) {
            inputLine = inputLine.substring(1);
            recourse = inputLine;
        }

        System.out.printf("[protocol] = \"%s\"\n", protocol);
        System.out.printf("[server] = \"%s\"\n", server);
        System.out.printf("[resource] = \"%s\"", recourse);


      //  String pattern = Pattern("");
      //  Matcher m = Pattern.compile(pattern).matcher(inputLine);

//        Pattern pattern = Pattern.compile("\\w+");
//       // Matcher m = pattern.matcher(inputLine);
//        Matcher m = pattern.matcher(inputLine);
//        System.out.println(m.matches());
//        System.out.println(m.groupCount());
    }
}