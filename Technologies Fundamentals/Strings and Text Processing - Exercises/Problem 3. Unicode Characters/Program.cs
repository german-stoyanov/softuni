namespace Problem_3.Unicode_Characters
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var word = Console.ReadLine();

            foreach (var letter in word)
            {
                Console.Write(GetEscapeSequence(letter));
            }

            Console.WriteLine();
        }

        public static string GetEscapeSequence(char c)
        {
            return "\\u" + ((int)c).ToString("X4").ToLower();
        }
    }
}