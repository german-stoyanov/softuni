namespace Problem_7.Multiply_big_number
{
    using System;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var firstNumberAsString = Console.ReadLine();
            var multiplyNumber = int.Parse(Console.ReadLine());

            if(multiplyNumber == 0)
            {
                Console.WriteLine("0");
                return;
            }

            firstNumberAsString = firstNumberAsString.
                PadLeft(firstNumberAsString.Length + 1, '0');

            var firstNumberAsInt = firstNumberAsString.
                Select(x => int.Parse(x.ToString()))
                .ToArray();

            var bonusNumber = 0;
            var currentSum = 0;
            var productSum = new int[firstNumberAsString.Length];

            for (int i = firstNumberAsString.Length - 1; i >= 0; i--)
            {
                currentSum = (firstNumberAsInt[i] * multiplyNumber) + bonusNumber;
                bonusNumber = currentSum >= 10 ? currentSum / 10 : 0;
                productSum[i] = currentSum % 10;
            }

            Console.WriteLine(string.Join(string.Empty, productSum.SkipWhile(x => x == 0)));
        }
    }
}