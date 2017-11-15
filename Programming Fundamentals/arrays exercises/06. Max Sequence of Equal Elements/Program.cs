using System;
using System.Linq;

namespace _6.Max_Sequence_of_Equal_Elements
{
    class Program
    {
        static void Main()
        {
            var numbersArray = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int counter = 1;
            int bestSequence = 1;
            int bestNumber = 1;

            for (int i = 0; i < numbersArray.Length - 1; i++)
            {
                if (numbersArray[i] == numbersArray[i + 1])
                {
                    counter++;
                }

                else
                {
                    counter = 1;
                }

                if (counter > bestSequence)
                {
                    bestSequence = counter;
                    bestNumber = numbersArray[i];
                }
            }

            for (int i = 0; i < bestSequence; i++)
            {
                Console.Write(bestNumber + " ");
            }

            Console.WriteLine();
        }
    