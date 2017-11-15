using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Endurance_Rally
{
    class Program
    {
        static void Main(string[] args)
        {
            var participantsNames = Console.ReadLine().Split().ToList();
            var zones = Console.ReadLine().Split().Select(double.Parse).ToList();
            var checkPoints = Console.ReadLine().Split().Select(int.Parse).ToList();
            var infoforWinners = new Dictionary<string,double>();
            var infoForLosers = new Dictionary<string, double>();
            for (int i = 0; i < zones.Count(); i++)
            {
                if (checkPoints.Contains(i))
                {
                    zones[i] *= -1;
                }
            }
            for (int i = 0; i < participantsNames.Count(); i++)
            {
                double fuel = (double)(participantsNames[i].First());
                var count = -1;
                while (fuel>0&&count<zones.Count()-1)
                {
                    count++;
                    fuel -= zones[count];
                }
                if (fuel>0)
                {
                    if (!infoforWinners.ContainsKey(participantsNames[i]))
                    {
                        infoforWinners[participantsNames[i]] = 0.0;
                    }
                    infoforWinners[participantsNames[i]] = fuel;
                }
                if (fuel<=0)
                {
                    if (!infoForLosers.ContainsKey(participantsNames[i]))
                    {
                        infoForLosers[participantsNames[i]] = 0.0;
                    }
                    infoForLosers[participantsNames[i]] = count;
                }
            }
            foreach (var plp in participantsNames)
            {
                if (infoforWinners.ContainsKey(plp))
                {
                    Console.WriteLine($"{plp} - fuel left {infoforWinners[plp]:f2}");
                }
                else
                {
                    Console.WriteLine($"{plp} - reached {infoForLosers[plp]}");
                }
            }
        }
    }
}
