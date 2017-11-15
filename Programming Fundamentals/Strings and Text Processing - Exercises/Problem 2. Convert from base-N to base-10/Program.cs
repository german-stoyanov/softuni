namespace Problem_2.Convert_from_base_N_to_base_10
{
    using System;
    using System.Numerics;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine().Split(' ');

            var baseN = BigInteger.Parse(input[0]);
            var decNumber = BigInteger.Parse(input[1]);

            BigInteger sum = 0;
            var patterDecNumber = decNumber;
            var gradationCounter = 0;

            while (patterDecNumber > 0)
            {
                var currentNumber = patterDecNumber % 10;
                BigInteger currentGradationSum = 1;

                if (gradationCounter != 0)
                {
                    for (int i = 1; i <= gradationCounter; i++)
                    {
                        currentGradationSum *= baseN;
                    }
                }

                sum += (currentNumber *  currentGradationSum);
                gradationCounter++;
                patterDecNumber /= 10;
            }

            Console.WriteLine(sum);
        }
    }
}