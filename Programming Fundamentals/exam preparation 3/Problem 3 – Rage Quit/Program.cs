using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Problem_3___Rage_Quit
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var charaarray = input.ToUpper().ToCharArray();

           
            
            var pattern = new Regex (@"([\D]+)([\d]+)");
            var matches = pattern.Matches(input);
            var array1 = new StringBuilder();
            foreach (Match item in matches)
            {
               var symbols = item.Groups[1].Value;
               var array = symbols.ToUpper();
               var stringtoadd = string.Concat(Enumerable.Repeat(array, int.Parse(item.Groups[2].Value)));
               array1.Append(stringtoadd);
            }
            var distinctarray = array1.ToString().Distinct();
            Console.WriteLine($"Unique symbols used: {distinctarray.Count()}");
            Console.WriteLine(string.Join("",array1));
        }
    }
}
