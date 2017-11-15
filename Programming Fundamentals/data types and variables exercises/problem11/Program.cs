using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp11
{
    class Program
    {
        static void Main(string[] args)
        {
            var dis = float.Parse(Console.ReadLine());
            var hour = float.Parse(Console.ReadLine());
            var mins = float.Parse(Console.ReadLine());
            var sec = float.Parse(Console.ReadLine());
            Console.WriteLine(dis/(hour*3600+mins*60+sec));
            Console.WriteLine(dis * 3.6f / (hour * 3600 + mins * 60 + sec));
            
            Console.WriteLine( dis * 3.6f / (hour * 3600 + mins * 60 + sec) /1.609f);
            
            
            

        }
    }
}
