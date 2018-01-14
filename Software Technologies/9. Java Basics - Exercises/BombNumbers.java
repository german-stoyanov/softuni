import java.util.*;
import java.util.stream.Collectors;

public class BombNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numsArr = Arrays.stream(
                scanner.nextLine()
                .split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        List<Integer> numsList = Arrays.stream(numsArr)
                .boxed()
                .collect(Collectors.toList());

        int[] tokens = Arrays.stream(
                scanner.nextLine()
                .split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        int specialNumber = tokens[0];
        int power = tokens[1];


        while (numsList.size() > 0 && numsList.contains(specialNumber)){
            int index = numsList.indexOf(specialNumber);
            numsList = RemoveAtLeft(numsList, power, index);
        }

        int sum = numsList
        .stream()
        .mapToInt(Integer::intValue)
        .sum();

        System.out.println(sum);
    }

    public static List<Integer> RemoveAtLeft (List<Integer> nums, int power, int index){
        int skippedNumbers = Math.max(0, index - power);
        int skipCountAtLeft = Math.min(index, power);

         //saves the numbers left from the removes at left (if there are any)
         List<Integer> numsAtLeft = nums
         .stream()
         .limit(skippedNumbers)
         .collect(Collectors.toList());

         //then remove the numbers at left
         nums = nums
         .stream()
         .skip(skippedNumbers + skipCountAtLeft)
         .collect(Collectors.toList());

        //getting the numbers to remove at right count
        int skipCountAtRight = Math.min(nums.size(), power + 1);
        nums = nums
        .stream()
        .skip(skipCountAtRight)
        .collect(Collectors.toList());

        //concats the survived numbers at left and the survived numbers at right
        numsAtLeft.addAll(nums);

         return numsAtLeft;
    }
}
