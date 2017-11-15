using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp6
{
    class Program
    {
        static void Main(string[] args)
        {
            var n2 = long.Parse(Console.ReadLine());
            var n1 = long.Parse(Console.ReadLine());
            var result = string.Empty;
            var list1 = new List<string>();
            var list2 = new char[] { ',', ' ' };
            //if (n1<n2)
            //{
           //     Console.WriteLine("empty list");
           //     return;
           // }
            for (long i = n2; i <= n1; i++)
            {
                if (IsPrime(i)!="")
                {
                    list1.Add(IsPrime(i));

                }
                
              
                

                
            }
            result = string.Join(", ", list1);
           
            Console.WriteLine(result);


        }
        static string IsPrime(long n)
        {
            bool checker = true;
            if (n == 0 || n == 1)
            {
                checker = false;
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
            if (checker==true)
            {
                return n.ToString();
            }
            else
            {
                return "";
            }
        }

    }
    
}
