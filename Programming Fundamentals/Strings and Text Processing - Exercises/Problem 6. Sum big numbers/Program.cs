namespace Problem_6.Sum_big_numbers
{
    using System;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var firstNumber = Console.ReadLine();
            var secondNumber = Console.ReadLine();

            var maxLength = Math.Max(firstNumber.Length, secondNumber.Length);

            firstNumber = firstNumber.PadLeft(maxLength + 1, '0');
            secondNumber = secondNumber.PadLeft(maxLength + 1, '0');

            var firstNumbersToInt = firstNumber.Select(x => int.Parse(x.ToString())).ToArray();
            var secondNumbersToInt = secondNumber.Select(x => int.Parse(x.ToString())).ToArray();
            var sum = new int[maxLength + 1];

            var bonusNumber = 0;
            var currentSum = 0;

            for (int i = maxLength; i >= 0; i--)
            {
                currentSum = firstNumbersToInt[i] + secondNumbersToInt[i] + bonusNumber;

                bonusNumber = currentSum >= 10 ? currentSum / 10 : 0;
                sum[i] = currentSum % 10;
            }

            Console.WriteLine(string.Join(string.Empty, sum.SkipWhile(x => x == 0)));
        }
    }
}