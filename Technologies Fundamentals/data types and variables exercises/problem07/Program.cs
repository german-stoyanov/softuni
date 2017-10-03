using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = 5;
            var b = 10;
            Console.WriteLine($"Before: \r\na = {a}\r\nb = {b}");
            var c = a;
            a = b;
            b = c;
            Console.WriteLine($"After: \r\na = {a}\r\nb = {b}");



        }
    }
}
