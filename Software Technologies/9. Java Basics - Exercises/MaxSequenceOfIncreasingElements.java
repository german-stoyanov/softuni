import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class MaxSequenceOfIncreasingElements {

    public static void main(String[] args) {
        int[] nums = Arrays.stream
                (new Scanner(System.in)
                        .nextLine()
                        .split(" "))
                .mapToInt(Integer::parseInt).toArray();

        ArrayList<Integer> bestSeq = new ArrayList<>();

        for(int i = 0; i < nums.length; i++){
            int currentNum = nums[i];
            ArrayList<Integer> currentSeq = new ArrayList<>(); //holds the increasing numbers
            currentSeq.add(currentNum);

            for (int j = i + 1; j < nums.length; j++){
                if(nums[j] > currentNum){
                    currentSeq.add(nums[j]);
                    currentNum = nums[j];
                } else {
                    break;
                }
            }

            if(currentSeq.size() > bestSeq.size()){ //checks if the current length is longer than the previous one
                bestSeq = currentSeq;
            }
        }

        for(int num : bestSeq){
            System.out.print(num + " ");
        }
    }
}