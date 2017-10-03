using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp19
{
    class Program
    {
        static void Main(string[] args)
        {
            var N = double.Parse(Console.ReadLine());
            var FT = double.Parse(Console.ReadLine());
            var FF = double.Parse(Console.ReadLine());
            var UT = double.Parse(Console.ReadLine());
            double result = N * (long)FT + Math.Ceiling(FF * N*0.01)*(long)UT;

            double seconds = (int)(result % 60);
            double minutes = (int)(result / 60 % 60);
            double hours = (int)(result / 60 / 60 % 24);
            double days = (int)(result / 60 / 60 / 24);
            Console.WriteLine($"{days}:{hours:00}:{minutes:00}:{seconds:00}");
        }
    }
}
