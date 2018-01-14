import java.util.Arrays;
import java.util.Scanner;

public class MostFrequentNumber {

    public static void main(String[] args) {
        int[] nums = Arrays.stream
                (new Scanner(System.in)
                        .nextLine()
                        .split(" "))
                .mapToInt(Integer::parseInt).toArray();

        int bestCount = 0;
        int bestNumber = 0;

        for(int i = 0; i < nums.length; i++){
            int currentCount = 1;
            int currentNumber = nums[i];

            for (int j = i + 1; j < nums.length; j++){
                if(nums[j] == currentNumber) {
                    currentCount++;
                }
            }

            if(currentCount > bestCount) {
                bestCount = currentCount;
                bestNumber = currentNumber;
            }
        }

        System.out.println(bestNumber);
    }
}