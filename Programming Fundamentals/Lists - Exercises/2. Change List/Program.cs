using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Change_List
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = Console.ReadLine().Split().Select(int.Parse).ToList();
            var input = Console.ReadLine();
            while (input != "Even" && input != "Odd")
            {
                var inputline = input.Split();
                if (inputline[0] == "Delete")
                {
                    a.RemoveAll(x => x==int.Parse(inputline[1]));
                }
                if (inputline[0] == "Insert")
                {
                    a.Insert(int.Parse(inputline[2]), int.Parse(inputline[1]));
                }
                input = Console.ReadLine();
            }
            if (input=="Odd")
            {


                for (int i = 0; i < a.Count; i++)
                {
                    if (a[i] % 2 == 1)
                    {
                        Console.Write(a[i] + " ");
                    }
                };
            }
            else
            {
                for (int i = 0; i < a.Count; i++)
                {
                    if (a[i] % 2 == 0)
                    {
                        Console.Write(a[i] + " ");
                    }
                };
            }


        }
    }
}
