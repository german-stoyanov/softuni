﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            var number = Console.ReadLine().Reverse().ToArray();
            Console.WriteLine(number);

        }
    }
}
