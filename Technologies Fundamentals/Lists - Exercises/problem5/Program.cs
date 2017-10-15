using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace problem5
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();
           
            var inputline = Console.ReadLine().Split(' ');
            while (inputline[0].ToString()!="print")
            {
              
                if (inputline[0]=="add")
                {
                    input.Insert(int.Parse(inputline[1]), int.Parse(inputline[2]));
                }
                if (inputline[0]=="contains")
                {
                    if (input.Contains(int.Parse(inputline[1])))
                    {
                        Console.WriteLine(input.IndexOf(int.Parse(inputline[1])));
                    }
                    else
                    {
                        Console.WriteLine(-1);
                    }
                }
                if (inputline[0]=="remove")
                {
                    input.RemoveAt(int.Parse(inputline[1]));
                }
                if (inputline[0]=="shift")
                {
                    for (int i = 0; i < int.Parse(inputline[1]); i++)
                    {
                        var x = input.First();
                        for (int j = 0; j <= input.Count-2; j++)
                        {
                            input[j] = input[j + 1];
                        }
                        input[input.Count() - 1] = x;
                    }
                }
                if (inputline[0]=="sumPairs")
                {
                    for (int i = 0; i < input.Count-1; i+=2)
                    {
                        input[i] = input[i] + input[i + 1];
                        
                    }
                    if (input.Count()%2!=0)
                    {
                        input.Add(input.Last());
                    }
                    for (int i = input.Count-1; i > 0; i-=2)
                    {
                        input.RemoveAt(i);
                    }
                }
                if (inputline[0]=="addMany")
                {
                    var index = int.Parse(inputline[1]);
                    var elements = inputline.Skip(2)
                        .Take(inputline.Count())
                        .Select(int.Parse)
                        .ToList();

                    input.InsertRange(index, elements);
                }
                inputline = Console.ReadLine().Split(' ');
            }
            Console.Write("[");
            Console.Write(string.Join(", ",input));
            Console.Write("]");
        }
    }
}
