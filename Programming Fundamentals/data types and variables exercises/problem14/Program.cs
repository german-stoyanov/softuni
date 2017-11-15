using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp14
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = int.Parse(Console.ReadLine());
            var b = Convert.ToString(a, 16).ToUpper();
            var d = Convert.ToString(a, 2);
            Console.WriteLine(b);
            Console.WriteLine(d);
        }
    }
}
