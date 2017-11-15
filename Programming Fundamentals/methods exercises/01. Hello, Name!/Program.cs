using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var name = Console.ReadLine();
            Method(name);
        }

        static void Method(string name)
        {
            Console.WriteLine($"Hello, {name}!");
        }
    }
}
