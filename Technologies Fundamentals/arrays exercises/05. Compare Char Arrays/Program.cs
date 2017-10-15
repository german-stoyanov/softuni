using System;
using System.Linq;

namespace _5.Compare_Char_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            var firstInput = Console.ReadLine().Replace(" ", string.Empty);
            var secondInput = Console.ReadLine().Replace(" ", string.Empty);

            var firstInputNoSpaces = firstInput.ToArray();
            var secondInputInputNoSpaces = secondInput.ToArray();

            bool isSecondInputOnFirstPos = false;

            for (int i = 0; i < Math.Min(firstInput.Length, secondInput.Length); i++)
            {
                if (firstInput[i] >= secondInput[i])
                {
                    isSecondInputOnFirstPos = true;
                }
            }

            if (isSecondInputOnFirstPos)
            {
                if (secondInputInputNoSpaces.Length <= firstInputNoSpaces.Length)
                {
                    Console.WriteLine(string.Join(string.Empty, secondInputInputNoSpaces));
                    Console.WriteLine(string.Join(string.Empty, firstInputNoSpaces));
                }

                else
                {
                    Console.WriteLine(string.Join(string.Empty, firstInputNoSpaces));
                    Console.WriteLine(string.Join(string.Empty, secondInputInputNoSpaces));
                }
            }

            else
            {
                Console.WriteLine(string.Join(string.Empty, firstInputNoSpaces));
                Console.WriteLine(string.Join(string.Empty, secondInputInputNoSpaces));
            }
        }
    }
}