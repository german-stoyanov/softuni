using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Pairs_by_Difference
{
    class Program
    {
        public static void Main(string[] args)
        {
            var numbersArray = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var difference = int.Parse(Console.ReadLine());

            int counter = 0;

            for (int i = 0; i < numbersArray.Length; i++)
            {
                for (int j = i + 1; j < numbersArray.Length; j++)
                {
                    if (Math.Abs(numbersArray[i] - numbersArray[j]) == difference)
                    {
                        counter++;
                    }
                }
            }

            Console.WriteLine(counter);
        }
    }
}