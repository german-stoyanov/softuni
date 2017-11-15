using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Problem
{
    class Program
    {
        static void Main(string[] args)
        {
            var text1 = Console.ReadLine();
            var thingReplacing = Console.ReadLine().Split(new char[] { '}','{'},StringSplitOptions.RemoveEmptyEntries).ToList();
            var pattern = new Regex(@"(?<name>[A-Za-z]+)(?<Castle>.+)(\k<name>)");
            var count = 0;
            
            var matche = pattern.Matches(text1);
           
            foreach (Match match in matche)
            {
                if (count>matche.Count)
                {
                    count = 0;
                }
                var Index = text1.IndexOf(match.Groups["Castle"].ToString());
                text1 = text1.Remove(Index, match.Groups["Castle"].ToString().Count());
                text1 = text1.Insert(Index, thingReplacing[count]);
                count++;
            }
            Console.WriteLine(text1);
                
            
        }
    }
}
