using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arrays_exercises
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = Console.ReadLine().Split().ToArray();
            var br = 0;
            var cr = 0;
            var b = Console.ReadLine().Split().ToArray();
            if (a.Length > b.Length)
            {
                for (int i = 0; i < b.Length; i++)
                {
                    if (a[i] != b[i])
                    {
                        break;
                    }
                    br++;
                }
                for (int i = b.Length - 1, j = a.Length - 1; i >= 0; i--, j--)
                {
                    if (a[j] != b[i])
                    {
                        break;
                    }
                    cr++;
                }
            }
            else
            {
                for (int i = 0; i < a.Length; i++)
                {
                    if (b[i] != a[i])
                    {
                        break;
                    }
                    br++;
                }
                for (int i = a.Length - 1, j = b.Length - 1; i >= 0; i--, j--)
                {
                    if (a[i] != b[j])
                    {
                        break;
                    }
                    cr++;
                }
            }
            Console.WriteLine(Math.Max(br, cr));

        }
    }
}

