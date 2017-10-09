using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _18.Sequence_of_Commands
{
    public class SequenceOfCommands_broken
    {
        public static void Main()
        {
            int sizeOfArray = int.Parse(Console.ReadLine());

            long[] array = Console.ReadLine()
                .Split(' ')
                .Select(long.Parse)
                .ToArray();

            var command = Console.ReadLine().Split(' ');
            var operation = command[0];

            while (!command[0].Equals("stop"))
            {
                operation = command[0];

                if (operation.Equals("add") || operation.Equals("subtract") || operation.Equals("multiply"))
                {
                    var indexInput = int.Parse(command[1]);
                    var valueInput = int.Parse(command[2]);
                    PerformAction(array, operation, indexInput - 1, valueInput);
                }

                else if (operation.Equals("rshift"))
                {
                    ArrayShiftRight(array);
                }

                else if (operation.Equals("lshift"))
                {
                    ArrayShiftLeft(array);
                }

                PrintArray(array);

                command = Console.ReadLine().Split(' ');
            }
        }

        static void PerformAction(long[] arr, string operation, int indexInput, int valueInput)
        {
            int index = indexInput;
            int value = valueInput;

            switch (operation)
            {
                case "multiply":
                    arr[index] *= value;
                    break;
                case "add":
                    arr[index] += value;
                    break;
                case "subtract":
                    arr[index] -= value;
                    break;
            }
        }

        static void ArrayShiftRight(long[] array)
        {
            var rShiftedList = new long[array.Length];
            rShiftedList[0] = array[array.Length - 1];

            for (int i = 1; i < array.Length; i++)
            {
                rShiftedList[i] = (array[i - 1]);
            }

            for (int i = 0; i < array.Length; i++)
            {
                array[i] = rShiftedList[i];
            }
        }

        private static void ArrayShiftLeft(long[] array)
        {
            var leftShiftedArray = new long[array.Length];
            leftShiftedArray[array.Length - 1] = array[0];

            for (int i = 0; i < array.Length - 1; i++)
            {
                leftShiftedArray[i] = array[i + 1];
            }

            for (int i = 0; i < array.Length; i++)
            {
                array[i] = leftShiftedArray[i];
            }
        }

        private static void PrintArray(long[] array)
        {
            Console.WriteLine(string.Join(" ", array));
        }
    }
}