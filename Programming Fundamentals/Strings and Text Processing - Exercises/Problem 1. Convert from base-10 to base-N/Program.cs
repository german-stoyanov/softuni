namespace Problem_1.Convert_from_base_10_to_base_N
{
    using System;
    using System.Linq;
    using System.Numerics;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine().Split(' ');

            var baseN = int.Parse(input[0]);
            var decNumber = BigInteger.Parse(input[1]);

            var reminder = string.Empty;

            while (decNumber > 0)
            {
                reminder = decNumber % baseN + reminder;
                decNumber /= baseN;
            }

            Console.WriteLine(reminder);
        }
    }
}