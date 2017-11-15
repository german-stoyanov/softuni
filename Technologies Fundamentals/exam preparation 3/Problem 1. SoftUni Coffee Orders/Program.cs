using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem_1.SoftUni_Coffee_Orders
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var totalSum = 0.0m;
            for (int i = 0; i < n; i++)
            {
                var price = decimal.Parse(Console.ReadLine());
                var date = DateTime.ParseExact(Console.ReadLine(), "d/M/yyyy", CultureInfo.InvariantCulture);
                var daysInMounth = DateTime.DaysInMonth(date.Year, date.Month);
                var count = decimal.Parse(Console.ReadLine());
                Console.WriteLine($"The price for the coffee is: ${daysInMounth*count*price:f2}");
                totalSum += daysInMounth * count * price;
            }
            Console.WriteLine($"Total: ${totalSum:f2}");
        }
    }
}
