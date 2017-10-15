using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Longest_Increasing_Subsequence
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console
                 .ReadLine()
                 .Split()
                 .Select(int.Parse)
                 .ToArray();
            var previous = new int[input.Length];
            var lenght = new int[input.Length];
            var bestlenght = 0;
            var lastingex = -1;
            for (int i = 0; i < input.Length; i++)
            {
                lenght[i] = 1;
                previous[i] = -1;
                for (int j = 0; j < i; j++)
                {
                    if (input[i]>input[j]&&lenght[j]+1>lenght[i])
                    {
                        lenght[i] = lenght[j] + 1;
                        previous[i] = j;
                    }
                }
                if (lenght[i]>bestlenght)
                {
                    bestlenght = lenght[i];
                    lastingex = i;
                }
            }
            var result = new List<int>();
            for (int i = lastingex; i != -1; i=previous[i])
            {
                result.Add(input[i]);
            }


            
            Console.WriteLine(string.Join(" ",result.Reverse<int>()));


        }
    }
}