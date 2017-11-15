using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem_4___Winning_Ticket
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new string[] { ", " ," "}, StringSplitOptions.RemoveEmptyEntries).ToList();
            var matches = new char[4] { '^','$','@','#'};
            for (int i = 0; i < input.Count(); i++)
            {
                var first = input[i].First();
                var distinct = input[i].Distinct();
                var ticket = '"' + input[i] + '"';
                if (input[i].Count()!=20)
                {
                    Console.WriteLine("invalid ticket");
                }
                else if (matches.Contains(input[i].First())&&input[i].Distinct().Count()==1)
                {
                    Console.WriteLine($"ticket {ticket} - 10{input[i].First()} Jackpot!");
                }
                else
                {
                    var firstHalf = input[i].Substring(0, 10).ToCharArray();
                    var secondHalf = input[i].Substring(10, 10).ToCharArray();
                    var longestSequence1 = 0;
                    var currentLenght1 = 0;
                    var currentelement1 = firstHalf[0];
                    var winningelement1 = currentelement1;

                    var longestSequence2 = 0;
                    var currentLenght2 = 0;
                    var currentelement2 = secondHalf[0];
                    var winningelement2 = currentelement2;
                    
                    for (int j = 0; j < 10; j++)
                    {
                        if (firstHalf[j]!=currentelement1)
                        {
                            currentLenght1 = 0;
                            currentelement1 = firstHalf[j];
                        }
                        currentLenght1++;
                        if (currentLenght1>longestSequence1)
                        {
                            longestSequence1 = currentLenght1;
                            winningelement1 = currentelement1;
                        }

                        if (secondHalf[j] != currentelement2)
                        {
                            currentLenght2 = 0;
                            currentelement2 = secondHalf[j];
                        }
                        currentLenght2++;
                        if (currentLenght2 > longestSequence2)
                        {
                            longestSequence2 = currentLenght2;
                            winningelement2= currentelement2;
                        }
                    }
                    
                    if (longestSequence2>=6&&longestSequence1>=6&&winningelement1==winningelement2&&matches.Contains(winningelement1))
                    {
                        Console.WriteLine($"ticket {ticket} - {Math.Min(longestSequence1,longestSequence2)}{winningelement1}");
                    }
                    else
                    {
                        Console.WriteLine($"ticket {ticket} - no match");
                    }
                    
                }
            }
            Console.WriteLine();
        }
    }
}
