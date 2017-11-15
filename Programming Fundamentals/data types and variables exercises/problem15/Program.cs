using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp15
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = int.Parse(Console.ReadLine());
            var br = 0;
            for (int j = 2; j <= a; j++)
            {
                var cr = 0;
                for (int i = 1; i <= j; i++)
                {
                    
                    if (j % i == 0)
                    {
                        cr++;
                    }
                    br = cr;
                }

                    if (br == 1||br==2)
                    {
                        Console.WriteLine($"{j} -> True");
                    }
                    else
                    {
                        Console.WriteLine($"{j} -> False");
                    }
                
            }
        }
    }
}
