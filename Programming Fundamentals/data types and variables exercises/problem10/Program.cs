using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp9
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = int.Parse(Console.ReadLine());
            int y = a * 100;
            int days = (int)(y * 365.2422);
            int hours = days * 24;
            int mins = hours * 60;
            ulong sec = (ulong)mins * 60;
            decimal misec = sec * 1000;
            decimal micsec = misec * 1000;
            decimal nansec = micsec * 1000;

            Console.WriteLine($"{a} centuries = {y} years = {days} days = {hours} hours = {mins} minutes = {sec} seconds = {misec} milliseconds = {micsec} microseconds = {nansec} nanoseconds");
        }
    }
}
