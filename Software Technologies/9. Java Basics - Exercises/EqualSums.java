import java.util.Arrays;
import java.util.Scanner;

public class EqualSums {

    public static void main(String[] args) {
        int[] nums = Arrays.stream
                (new Scanner(System.in)
                        .nextLine()
                        .split(" "))
                .mapToInt(Integer::parseInt).toArray();

        boolean equalSumFound = false;

        for (int i = 0; i < nums.length; i++) {
            int leftSum = GetLeftSum(i, nums);
            int rightSum = GetRightSum(i, nums);

            if(leftSum == rightSum) {
                System.out.println(i);
                equalSumFound = true;
                return;
            }
        }

        if(!equalSumFound) {
            System.out.println("no");
        }
    }

    public static int GetLeftSum(int index, int[] nums) {
        int leftSum = 0;

        for(int i = index - 1; i >= 0; i--){
            leftSum += nums[i];
        }

        return  leftSum;
    }

    public static int GetRightSum(int index, int[] nums) {
        int rightSum = 0;

        for(int i = index + 1; i < nums.length; i++){
            rightSum += nums[i];
        }

        return  rightSum;
    }
}
