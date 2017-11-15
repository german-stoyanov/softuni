using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        public class Command
        {
            public string Direction { get; set; }
            public int Index { get; set; }
        }
        static void Main(string[] args)
        {
            var inputline = Console.ReadLine().Split().Select(int.Parse).ToList();
            var startzone = int.Parse(Console.ReadLine());
            var commandline = Console.ReadLine().Split();
            var damage = 1;
            while (commandline[0] != "Supernova")
            {
                var information = new Command()
                {
                    Direction = commandline[0],
                    Index = int.Parse(commandline[1])
                };
                if (information.Direction=="right")
                {
                    
                    for (int i = 0; i < information.Index; i++)
                    {
                        startzone++;
                        if (startzone>inputline.Count-1)
                        {
                            startzone = 0;
                            damage += 1;
                            inputline[startzone] -= damage;
                        }
                        else
                        {
                           
                            inputline[startzone] -= damage;
                        }
                    }
                }
                else
                {
                   
                    for (int i = 0; i < information.Index; i++)
                    {
                        startzone--;
                        if (startzone < 0)
                        {
                            startzone = inputline.Count-1;
                            damage += 1;
                            inputline[startzone] -= damage;
                        }
                        else
                        {
                            
                            inputline[startzone] -= damage;
                        }
                    }
                }
                commandline = Console.ReadLine().Split();
            }
            for (int i = 0; i < inputline.Count; i++)
            {
                Console.Write(inputline[i]+" ");
            }
        }
    }
}
