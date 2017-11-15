using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            var num = Console.ReadLine();
            int a = Convert.ToInt32(num, 16);
            Console.WriteLine(a);
        }
    }
}
