import java.util.HashMap;
import java.util.Scanner;
import java.util.SortedMap;
import java.util.TreeMap;

public class PhonebookUpgrade {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        SortedMap<String, String> nameNumber = new TreeMap<String, String>();


        String inputLine = scanner.nextLine();

        while (!inputLine.equals("END")) {
            String[] tokens = inputLine.split(" ");
            if(inputLine.charAt(0) == 'A') {
                String name = tokens[1];
                String number = tokens[2];

                nameNumber.put(name, number);
            } else if(inputLine.equals("ListAll")) {
                nameNumber.forEach((key,value) -> System.out.println(key + " -> " + value));
            } else {
                String name = tokens[1];

                if (nameNumber.containsKey(tokens[1])) {
                    System.out.println(name + " -> " + nameNumber.get(name));
                } else {
                    System.out.println("Contact " + name + " does not exist.");
                }
            }

            inputLine = scanner.nextLine();
        }
    }
}