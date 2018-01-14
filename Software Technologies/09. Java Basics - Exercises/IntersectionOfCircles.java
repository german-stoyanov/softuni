import java.util.Arrays;
import java.util.Scanner;

public class IntersectionOfCircles {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double[] firstCircleArgs = Arrays.stream(scanner.nextLine().split(" ")).mapToDouble(Double::parseDouble).toArray();
        double[] secondCircleArgs = Arrays.stream(scanner.nextLine().split(" ")).mapToDouble(Double::parseDouble).toArray();

        double X1 = firstCircleArgs[0];
        double Y1 = firstCircleArgs[1];
        double R1 = firstCircleArgs[2];
        double X2 = secondCircleArgs[0];
        double Y2 = secondCircleArgs[1];
        double R2 = secondCircleArgs[2];

        Double pointsSum = ((X1-X2) * (X1-X2)) + ((Y1-Y2) * (Y1-Y2));
        Double radiusSum = (R1 + R2) * (R1 + R2);

        if(pointsSum <= radiusSum) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}


