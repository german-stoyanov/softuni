import java.util.Scanner;

public class CompareCharArrays {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] firstLineSplitted = scanner.nextLine().split(" ");
        String[] secondLineSplitted = scanner.nextLine().split(" ");

        int firstArrValue = 0;
        int secondArrValue = 0;
        int total = Math.min(firstLineSplitted.length, secondLineSplitted.length);

        for (int i = 0; i < total; i++){
            if (firstLineSplitted[i].charAt(0) > secondLineSplitted[i].charAt(0)){
                firstArrValue++;
            } else {
                secondArrValue++;
            }
        }

        if (firstArrValue > secondArrValue || firstLineSplitted.length > secondLineSplitted.length) {
            System.out.println(String.join("",secondLineSplitted));
            System.out.println(String.join("",firstLineSplitted));
        } else {
            System.out.println(String.join("",firstLineSplitted));
            System.out.println(String.join("",secondLineSplitted));
        }
    }
}
