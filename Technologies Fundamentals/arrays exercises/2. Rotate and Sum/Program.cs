using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Rotate_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine().Split().Select(int.Parse).ToArray();
            var sum = new int[array.Length];
            var k = int.Parse(Console.ReadLine());
            var x = new int[array.Length];
            for (int i = 0; i < array.Length; i++)
            {
                x[i] = array[i];
            }
            for (int i = 0; i < k; i++)
            {
                var d = array.Last();
                
                for (int j = 1; j < array.Length; j++)
                {
                    
                    array[j] = x[j-1];
                }
                array[0] = d;
                for (int f = 0; f < array.Length; f++)
                {
                    x[f] = array[f];
                }
                for (int q = 0; q < array.Length; q++)
                {
                    sum[q] += array[q];
                }
               
            }
            Console.WriteLine(string.Join(" ",sum));
        }
    }
}
