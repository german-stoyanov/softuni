namespace _8.Logs_Aggregator
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            var n = int.Parse(Console.ReadLine());
            var input = Console.ReadLine();

            var lineCount = 0;
            var logsAgreggator = new SortedDictionary<string, Dictionary<string, int>>();

            while (true)
            {
                var splittedInput = input.Split(' ').ToArray();
                var IP = splittedInput[0];
                var name = splittedInput[1];
                var duration = int.Parse(splittedInput[2]);

                if (!logsAgreggator.ContainsKey(name))
                {
                    logsAgreggator[name] = new Dictionary<string, int>();
                }

                else if (logsAgreggator[name].ContainsKey(IP))
                {
                    duration += logsAgreggator[name][IP];
                }

                logsAgreggator[name][IP] = duration;

                lineCount++;
                if (lineCount == n)
                {
                    break;
                }

                input = Console.ReadLine();
            }

            foreach (var logs in logsAgreggator)
            {
                Console.WriteLine($"{logs.Key}: {logs.Value.Sum(x => x.Value)} [{string.Join(", ", logs.Value.Keys.OrderBy(x => x))}]");
            }
        }
    }
}