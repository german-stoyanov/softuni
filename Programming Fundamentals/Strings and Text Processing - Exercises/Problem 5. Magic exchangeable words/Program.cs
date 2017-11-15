namespace Problem_5.Magic_exchangeable_words
{
    using System;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            var inputWords = Console.ReadLine().Split(' ');

            var firstWord = inputWords[0];
            var secondWord = inputWords[1];

            var firstWordUniqueChars = GetFirstWordUniqueCharsCount(firstWord);
            var secondWordUniqueChars = GetSecondWordUniqueCharsCount(secondWord);

            var areExchangeable = firstWordUniqueChars.Count == secondWordUniqueChars.Count;

            Console.WriteLine(areExchangeable.ToString().ToLower());
        }

        public static List<char> GetFirstWordUniqueCharsCount(string firstWord)
        {
            var charsList = new List<char>();

            for (int i = 0; i < firstWord.Length; i++)
            {
                if (!charsList.Contains(firstWord[i]))
                {
                    charsList.Add(firstWord[i]);
                }
            }

            return charsList;
        }

        public static List<char> GetSecondWordUniqueCharsCount(string secondWord)
        {
            var charsList = new List<char>();

            for (int i = 0; i < secondWord.Length; i++)
            {
                if (!charsList.Contains(secondWord[i]))
                {
                    charsList.Add(secondWord[i]);
                }
            }

            return charsList;
        }
    }
}