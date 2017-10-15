using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.Search_for_a_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = Console.ReadLine().Split().Select(int.Parse).ToList();
            var b = Console.ReadLine().Split().Select(int.Parse).ToList();
            var c = a.Take(b[0]).ToList();
            for (int i = b[1]-1; i >= 0; i--)
            {
                c.RemoveAt(i);
            }
            var q = false;
            for (int i = 0; i < c.Count(); i++)
            {
                if ((c[i])==b[2])
                {
                    q = true;
                }
            }
            if (q)
            {
                Console.WriteLine("YES!");
            }
            else
            {
                Console.WriteLine("NO!");
            }
        }
    }
}
