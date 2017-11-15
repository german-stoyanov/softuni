namespace _14.Factorial_Trailing_Zeroes
{
    using System;
    using System.Numerics;

    public class Program
    {
        public static void Main()
        {
            GetZerosCount(int.Parse(Console.ReadLine()));
        }

        public static void GetZerosCount(int number)
        {
            BigInteger fact = GetFactorial(number);
            BigInteger numberSplitter = 0;
            BigInteger zerosStorage = 0;

            while (fact % 10 == 0)
            {
                numberSplitter += fact % 10;
                fact /= 10;
                if (numberSplitter == 0) zerosStorage++;
            }

            Console.WriteLine(zerosStorage);
        }

        public static BigInteger GetFactorial(int number)
        {
            BigInteger factorial = 1;

            for (int i = 1; i <= number; i++)
            {
                factorial = factorial * i;
            }

            return factorial;
        }
    }
}