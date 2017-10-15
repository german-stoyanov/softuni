using System;
using System.Linq;

namespace _3.Fold_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            //initialising the numbers at left 
            var leftNumbers = new int[numbers.Length / 4];
            for (int i = 0; i < numbers.Length / 4; i++)
            {
                leftNumbers[i] = numbers[i];
            }

            //initialising the numbers at middle 
            var middleNumbers = new int[numbers.Length / 2];
            int middleCounter = 0;

            while (middleCounter != numbers.Length / 2)
            {
                for (int j = numbers.Length / 4; j < numbers.Length - (numbers.Length / 4); j++)
                {
                    middleNumbers[middleCounter] = numbers[j];
                    middleCounter++;
                }
            }

            //initialising the numbers at right
            var rightNumbers = new int[numbers.Length / 4];
            int rightNumbersCounter = 0;

            for (int j = (numbers.Length * 3) / 4; j < numbers.Length; j++)
            {
                rightNumbers[rightNumbersCounter] = numbers[j];
                rightNumbersCounter++;
            }

            //reversing left and right numbers
            Array.Reverse(leftNumbers);
            Array.Reverse(rightNumbers);

            //adding the reversed numbers to one array
            var leftAndRightNumbers = new int[numbers.Length / 2];
            leftAndRightNumbers = leftNumbers.Concat(rightNumbers).ToArray();

            //summing the left and right numbers with the middle numbers
            var sum = new int[numbers.Length / 2];
            for (int i = 0; i < numbers.Length / 2; i++)
            {
                sum[i] = leftAndRightNumbers[i] + middleNumbers[i];
            }

            Console.WriteLine(string.Join(" ", sum));
        }
    }
}