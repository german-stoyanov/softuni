import java.util.Scanner;

public class IntegerToHexAndBinary {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = scanner.nextInt();

        String intToHex = Integer.toHexString(number).toUpperCase();
        String intToBinary = Integer.toBinaryString(number);

        System.out.println(intToHex);
        System.out.println(intToBinary);
    }
}