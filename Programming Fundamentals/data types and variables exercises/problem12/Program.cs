using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp12
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = double.Parse(Console.ReadLine());
            var b = double.Parse(Console.ReadLine());
            Console.WriteLine(2d*(a+b));
            Console.WriteLine(a*b);
            Console.WriteLine(Math.Sqrt(a*a+b*b));
            
            
        }
    }
}
