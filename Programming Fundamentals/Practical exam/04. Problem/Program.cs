using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Problem
{
    public class Info
    {
        public long Money { get; set; }
        public string Name { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var listWithSets = new List<string>();
            var infodict = new Dictionary<string,List<Info>>();
            var dataSetDict = new Dictionary<string, List<long>>();
            while (input!= "thetinggoesskrra")
            {
                var splitted = input.Split(new string[] { " -> "," | "},StringSplitOptions.RemoveEmptyEntries);
                if (splitted.Length==1)
                {
                    listWithSets.Add(input);
                }
                else
                {
                    var infoclass = new Info
                    {
                        Money = long.Parse(splitted[1]),
                        Name = splitted[0]
                    };
                    if (!infodict.ContainsKey(splitted[2]))
                    {
                        infodict[splitted[2]] = new List<Info>();
                    }
                    infodict[splitted[2]].Add(infoclass);
                }
                input = Console.ReadLine();
            }

            foreach (var item in infodict)
            {
                if (listWithSets.Contains(item.Key))
                {
                    if (!dataSetDict.ContainsKey(item.Key))
                    {
                        dataSetDict[item.Key] = new List<long>();
                    }
                    foreach (var item1 in item.Value)
                    {
                        dataSetDict[item.Key].Add(item1.Money);
                    }
                }
            }
            var winningTeam = string.Empty;
            var sum = 0l;
            foreach (var item in dataSetDict.OrderBy(x => -x.Value.Sum()))
            {
                winningTeam = item.Key;
                sum = dataSetDict[item.Key].Sum();
                break;
            }
            if (winningTeam == "")
            {

            }
            else
            {


                Console.WriteLine($"Data Set: {winningTeam}, Total Size: {sum}");
                foreach (var item in infodict.Where(x => x.Key == winningTeam))
                {
                    foreach (var item1 in item.Value)
                    {
                        Console.WriteLine($"$.{item1.Name}");
                    }
                }
            }
        }
    }
}
