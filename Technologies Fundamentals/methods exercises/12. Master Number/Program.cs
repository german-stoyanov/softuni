namespace _12.Master_Numbers
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var input = int.Parse(Console.ReadLine());

            for (int i = 1; i < input; i++)
            {
                if (IsPalindrome(i) && IsDigitsSumDivisibleBy7(i) && IsEven(i))
                {
                    Console.WriteLine(i);
                }
            }
        }

        static bool IsPalindrome(int number)
        {
            int reverse = 0;
            int numberStorage = 0;
            int temp = number;

            while (number != 0)
            {
                numberStorage = number % 10;
                reverse = reverse * 10 + numberStorage;
                number /= 10;
            }

            if (reverse == temp)
            {
                return true;
            }

            return false;
        }

        static bool IsDigitsSumDivisibleBy7(int number)
        {
            int digitsSum = 0;

            while (number != 0)
            {
                digitsSum += number % 10;
                number /= 10;
            }

            if (digitsSum % 7 == 0)
            {
                return true;
            }

            return false;
        }

        static bool IsEven(int number)
        {
            int digitsStorage = 0;

            while (number != 0)
            {
                digitsStorage = number % 10;

                if (digitsStorage % 2 == 0)
                {
                    return true;
                }

                number /= 10;

            }

            return false;
        }
    }
}
