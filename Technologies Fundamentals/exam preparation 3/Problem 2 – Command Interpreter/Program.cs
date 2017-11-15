using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem_2___Command_Interpreter
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] whitespace = new char[] { ' ', '\t' };
            var array = Console.ReadLine().Split(whitespace, StringSplitOptions.RemoveEmptyEntries).ToArray();
            var input = Console.ReadLine();

            while (input != "end")
            {
                var inputCommand = input.Split(whitespace, StringSplitOptions.RemoveEmptyEntries);
                if (inputCommand[0] == "sort")
                {
                    var start = int.Parse(inputCommand[2]);
                    var count = double.Parse(inputCommand[4]);
                    if (start >= 0 && count >= 0 && start + count <= array.Count() && count <= array.Count() && start < array.Count())
                    {


                        var newarr1 = new List<string>();
                        for (int i = int.Parse(inputCommand[2]), cr = 0; i < int.Parse(inputCommand[2]) + int.Parse(inputCommand[4]); cr++, i++)
                        {
                            newarr1.Add(array[i]);
                        }
                        newarr1.Sort();
                        for (int i = int.Parse(inputCommand[2]), br = 0; i < int.Parse(inputCommand[4]) + int.Parse(inputCommand[2]); br++, i++)
                        {
                            array[i] = newarr1[br];
                        }
                    }
                    else
                    {
                        Console.WriteLine("Invalid input parameters.");
                    }
                }
                if (inputCommand[0] == "reverse")
                {
                    var start = int.Parse(inputCommand[2]);
                    var count = double.Parse(inputCommand[4]);
                    if (start >= 0 && count >= 0 && start + count <= array.Count() && count <= array.Count() && start < array.Count())
                    {


                        var arr1 = new List<string>();
                        for (int i = int.Parse(inputCommand[2]), cr = 0; i < int.Parse(inputCommand[2]) + int.Parse(inputCommand[4]); cr++, i++)
                        {
                            arr1.Add(array[i]);
                        }
                        arr1.Reverse();
                        for (int i = int.Parse(inputCommand[2]), br = 0; i < int.Parse(inputCommand[4]) + int.Parse(inputCommand[2]); br++, i++)
                        {
                            array[i] = arr1[br].ToString();
                        }




                    }
                    else
                    {
                        Console.WriteLine("Invalid input parameters.");
                    }
                }

                if (inputCommand[0] == "rollLeft" )
                {
                    if (int.Parse(inputCommand[1]) >= 0)
                    {


                        var shift = int.Parse(inputCommand[1]);
                        //for (int i = 0; i < int.Parse(inputCommand[1]); i++)
                        //{
                        // var firstElement = array.First();

                        //    for (int j = 0; j < array.Length-1; j++)
                        //    {
                        //        array[j] = array[j + 1];
                        //}

                        // array[array.Length - 1] = firstElement;
                        shift %= array.Count();
                        array = array.Skip(shift).Concat(array.Take(shift)).ToArray();
                    }
                    else
                    {
                        Console.WriteLine("Invalid input parameters.");
                    }

                }
                


                if (inputCommand[0] == "rollRight" )
                {
                    if (int.Parse(inputCommand[1]) >= 0)
                    {


                        var shift = int.Parse(inputCommand[1]);
                        //for (int i = 0; i < int.Parse(inputCommand[1]); i++)
                        //{
                        //var lastElement = array.Last();

                        // for (int j = array.Length - 1; j > 0; j--)
                        // {
                        //    array[j] = array[j - 1];
                        // }

                        // array[0] = lastElement;

                        //}
                        shift %= array.Count();
                        array = array.Skip(array.Count() - shift).Concat(array.Take(array.Count() - shift)).ToArray();
                    }
                    else
                    {
                        Console.WriteLine("Invalid input parameters.");
                    }
                }
                
                input = Console.ReadLine();
            }
            Console.Write("[");
            Console.Write(string.Join(", ", array));
            Console.Write("]");
        }

    }
}
