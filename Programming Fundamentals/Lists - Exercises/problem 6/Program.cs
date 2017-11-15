
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
            var a = Console.ReadLine().Split().ToList();
            var b = new string[a.Count];
            var sum = 0;
            for (int i = 0; i < a.Count; i++)
            {
                var c = a[i].Reverse().ToArray();
                b[i] = string.Join("", c);
                sum += int.Parse(b[i]);
            }
            Console.WriteLine(sum);
        }
    }
}
