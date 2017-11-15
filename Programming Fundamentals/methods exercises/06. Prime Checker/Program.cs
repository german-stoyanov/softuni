using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Prime_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = long.Parse(Console.ReadLine());
            
            bool check = IsPrime(n);
            Console.WriteLine(check);
        }

        static bool IsPrime(long n)
        {
            bool checker = true;
            if (n==0||n==1)
            {
                return false;
            }
            for (int i = 2; i <= (int)Math.Sqrt(n); i++)
            {
                if (n % i == 0)
                {
                    checker = false;
                    
                }
                if (!checker)
                {
                    break;
                }
                
              
            }
            return checker;
        }
    }
}
