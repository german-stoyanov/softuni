using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp13
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = Console.ReadLine();
            var b = Convert.ToChar(a);
            if (b == 'a'||b=='e'||b=='o'||b=='u'||b=='i')
            {
                Console.WriteLine("vowel");
            }
            else if (b>='0'&&b<='9')
            {
                Console.WriteLine("digit");
            }
            else
            {
                Console.WriteLine("other");
            }
        }
    }
}
