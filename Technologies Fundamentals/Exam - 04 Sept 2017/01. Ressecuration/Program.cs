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
            int n = int.Parse(Console.ReadLine());
            var result = 0m;
            for (int i = 0; i < n; i++)
            {
                result = 0m;
                var result1 = 0m;
                decimal a = decimal.Parse(Console.ReadLine());
                decimal b = decimal.Parse(Console.ReadLine());
                decimal c = decimal.Parse(Console.ReadLine());
                if (a < 0 || b < 0 || c < 0)
                {
                    break;
                }
                result = a * a;
                result1 = (decimal)(b + 2 * c);
                Console.WriteLine(result * result1);
            }
        }

    }
}
