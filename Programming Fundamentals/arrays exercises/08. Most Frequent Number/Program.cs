using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8.Most_Frequent_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbersArray = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int count = 1;
            int bestFrequency = 1;
            int bestFrequentNumber = 0;

            for (int i = 0; i < numbersArray.Length; i++)
            {
                for (int j = i + 1; j < numbersArray.Length; j++)
                {
                    //checking if the numbers are equal and counting the length
                    if (numbersArray[i] == numbersArray[j])
                    {
                        count++;
                    }

                    //storing the best frequency and saving the number value
                    if (count > bestFrequency)
                    {
                        bestFrequency = count;
                        bestFrequentNumber = numbersArray[i];
                    }
                }

                count = 1;
            }

            //if there are no equal numbers
            if (bestFrequentNumber == 0)
            {
                bestFrequentNumber = numbersArray[0];
            }

            Console.WriteLine(bestFrequentNumber);
        }


