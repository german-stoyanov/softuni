import java.util.Arrays;
import java.util.Scanner;

public class MaxSequenceOfEqualElements {

    public static void main(String[] args) {
       int[] nums = Arrays.stream
               (new Scanner(System.in)
                       .nextLine()
                       .split(" "))
                       .mapToInt(Integer::parseInt).toArray();

       int bestLength = 0; //holds the most longest sequence length of equal elements
       int mostRepeatedNum = 0; //holds the actual number of the longest length

       for(int i = 0; i < nums.length; i++){
           int currentNum = nums[i];
           int currentLength = 1; //current length always starts with 1, because we already have one number

           for (int j = i + 1; j < nums.length; j++){
               if(nums[j] == currentNum){
                   currentLength++;
               } else {
                   break;
               }
           }

           if(currentLength > bestLength){ //checks if the current length is longer than the previous one
               bestLength = currentLength;
               mostRepeatedNum = currentNum;
           }
       }

       for(int i = 0; i < bestLength; i++){
           System.out.print(mostRepeatedNum + " ");
       }
    }
}