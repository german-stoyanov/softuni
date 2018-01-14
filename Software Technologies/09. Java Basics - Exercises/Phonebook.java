import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Phonebook {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, String> nameNumber = new TreeMap<>();

        String inputLine = scanner.nextLine();

        while (!inputLine.equals("END")) {
            String[] tokens = inputLine.split(" ");
            String name = tokens[1];

            if(inputLine.charAt(0) == 'A') {
                String number = tokens[2];

                nameNumber.put(name, number);
            } else {
                if (nameNumber.containsKey(name)) {
                    System.out.println(name + " -> " + nameNumber.get(name));
                } else {
                    System.out.println("Contact " + name + " does not exist.");
                }
            }

            inputLine = scanner.nextLine();
        }
    }
}