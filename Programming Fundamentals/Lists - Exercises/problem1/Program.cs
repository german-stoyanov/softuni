namespace ConsoleApplication8
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            var inputNumbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int bestNum = 0; //stores the most frequent number
            var bestLen = 0; //stores the longest length of equal numbers

            for (int i = 0; i < inputNumbers.Count(); i++)
            {
                var currentLen = 0;

                for (int j = 0; j < inputNumbers.Count(); j++)
                {
                    //if equal number is found we increase the current length
                    if (inputNumbers[i] == inputNumbers[j])
                    {
                        currentLen++;
                    }

                    //if the current length is > current best length, a best length is found

                    if (currentLen > bestLen)
                    {
                        bestLen = currentLen;
                        bestNum = inputNumbers[i];
                    }
                }
            }

            for (int i = 0; i < bestLen; i++)
            {
                Console.Write(bestNum + " ");
            }

            Console.WriteLine();
        }
    }
}