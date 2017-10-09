namespace _13.Factorial
{
    using System;
    using System.Numerics;

    public class Program
    {
        public static void Main()
        {
            Console.WriteLine(GetFactorial(int.Parse(Console.ReadLine())));
        }

        static BigInteger GetFactorial(int number)
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
