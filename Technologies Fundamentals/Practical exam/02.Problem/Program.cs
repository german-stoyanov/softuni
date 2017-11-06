using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _02.Problem
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').ToList();
            var results = new List<string>();
            var command = Console.ReadLine();
            while (command!="3:1")
            {
                var splittedCommand = command.Split(' ');
                if (splittedCommand[0]=="divide")
                {
                    var piece = int.Parse(splittedCommand[1]);
                    var HowPieces = int.Parse(splittedCommand[2]);
                    var equalLenght = Math.Floor(((double)input[piece].Count()) / HowPieces);
                    var longestLenght = input[piece].Count() - (HowPieces-1) * equalLenght;
                    
                    var current = input[piece];
                    input.RemoveAt(piece);
                    var lastString = string.Concat(current.Skip(current.Count() - (int)longestLenght).Take((int)longestLenght));
                    input.Insert(piece,lastString);
                    for (int i = current.Length-(int)longestLenght; i>=0; i--)
                    {
                        if (i%equalLenght==0&&i!=0)
                        {
                            input.Insert(piece,string.Concat(current.Skip(i-(int)equalLenght).Take((int)equalLenght)));
                        }
                    }
                    
                }
                if (splittedCommand[0]=="merge")
                {
                    
                    var starter = int.Parse(splittedCommand[1]);
                    var ender = int.Parse(splittedCommand[2]);
                    if (starter<0)
                    {
                        starter = 0;
                    }
                    if (ender>input.Count()-1)
                    {
                        ender = input.Count() - 1;
                    }
                    if (starter > input.Count() - 1 || ender < 0)
                    {
                        
                    }
                    else
                    {


                        var count = 0;
                        var stringche = new StringBuilder();
                        for (int i = starter; i <= ender; i++)
                        {
                            stringche.Append(input[i]);
                        }
                        input.RemoveRange(starter, ender - starter + 1);

                        input.Insert(starter, stringche.ToString());
                    }
                    
                }
                command = Console.ReadLine();
            }
            foreach (var item in input)
            {
                Console.Write($"{item} ");
            }
        }
    }
}
