using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp5
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var result = FibNim(n);
            Console.WriteLine(result);
        }

        static int FibNim(int n)
        {
            if (n == 0||n==1)
            {
                return 1;
            }
            return FibNim(n-2) + FibNim(n - 1);

        }
    }
}
