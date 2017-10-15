using System;

namespace _4.Sieve_of_Eratosthenes
{
    public class Program
    {
        public static void Main()
        {
            int range = int.Parse(Console.ReadLine());

            for (int i = 0; i <= range; i++)
            {
                if (IsPrime(i))
                {
                    Console.Write(i + " ");


                }
            }

            Console.WriteLine();
        }

        static bool IsPrime(int number)
        {
            if (number == 0 || number == 1)
            {
                return false;
            }

            for (int i = 2; i <= Math.Floor(Math.Sqrt(number)); i++)
            {
                if (number % i == 0)
                {
                    return false;
                }
            }

            return true;
        }
    }
}
