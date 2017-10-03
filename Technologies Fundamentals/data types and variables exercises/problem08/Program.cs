using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = Console.ReadLine();
            var b = Console.ReadLine();
            var c = int.Parse(Console.ReadLine());
            var d = char.Parse(Console.ReadLine());
            var e = long.Parse(Console.ReadLine());
            var f = long.Parse(Console.ReadLine());
            Console.WriteLine($"First name: {a}\r\nLast name: {b}\r\nAge: {c}\r\nGender: {d}\r\nPersonal ID: {e}\r\nUnique Employee number: {f}");
        }
    }
}
