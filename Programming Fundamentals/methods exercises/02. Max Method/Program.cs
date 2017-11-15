using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            var number1 = int.Parse(Console.ReadLine());
            var number2 = int.Parse(Console.ReadLine());
            var number3 = int.Parse(Console.ReadLine());
            var result = getMax(getMax(number1, number2), number3);
            Console.WriteLine(result);

        }

        static int getMax(int number1, int number2)
        {
            return Math.Max(number1, number2);
        }
    }
}
