using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _7.Max_Sequence_of_Increasing_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbersArray = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();//Console.ReadLine()   //"3 4 5 6"

            int maxLength = 1;
            int bestSequence = 1;
            int index = 0;
            int bestIndex = 0;

            for (int i = 0; i < numbersArray.Length - 1; i++)
            {
                if (numbersArray[i] < numbersArray[i + 1])
                {
                    maxLength++;
                }

                else
                {
                    maxLength = 1;
                    index = i + 1;
                }

                if (maxLength > bestSequence)
                {
                    bestSequence = maxLength;
                    bestIndex = index;
                }
            }

            for (int i = 0; i < bestSequence; i++)
            {
                Console.Write(numbersArray[bestIndex + i] + " ");
            }

            Console.WriteLine();
        }
    }
}
