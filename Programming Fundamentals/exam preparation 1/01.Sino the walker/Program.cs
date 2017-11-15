using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Sino_the_walker
{
    class Program
    {
        

        static void Main(string[] args)
        {
            var timeLeaving = DateTime.ParseExact(Console.ReadLine(), "HH:mm:ss", CultureInfo.InvariantCulture);
            var steps = int.Parse(Console.ReadLine())%86400;
            var secondsPerStep = int.Parse(Console.ReadLine())%86400;
            long totalSeconds = secondsPerStep * steps;
            var timeArriving = timeLeaving.AddSeconds((double)totalSeconds%86400);
            Console.WriteLine($"Time Arrival: {timeArriving:HH:mm:ss}");
        }
    }
}
