using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _01.Problem
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var securityKey = ulong.Parse(Console.ReadLine());
            var totalLoss = 0m;
            BigInteger result = 1;
            for (int i = 0; i < n; i++)
            {
                var splittedInput = Console.ReadLine().Split(new char[] { ' '},StringSplitOptions.RemoveEmptyEntries);
                var defectedSite = splittedInput[0].Trim();
                var visits = long.Parse(splittedInput[1].Trim());
                var pricePerVisit = decimal.Parse(splittedInput[2].Trim());
                var MoneyLoss = (decimal)visits * pricePerVisit;
                Console.WriteLine(defectedSite);
                totalLoss += MoneyLoss;
            }
            
            Console.WriteLine($"Total Loss: {totalLoss:f20}");
            for (int i = 0; i < n; i++)
            {
                result *= securityKey;
            }
            Console.WriteLine($"Security Token: {result}");
        }
    }
}
