namespace Problem_4.Character_Multiplier
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var inputWords = Console.ReadLine().Split(' ');

            var firstWord = inputWords[0];
            var secondWord = inputWords[1];

            var smallerWordLength = Math.Min(firstWord.Length, secondWord.Length);
            var sum = 0;

            for (int i = 0; i < smallerWordLength; i++)
            {
                sum += firstWord[0] * secondWord[0];
                firstWord = firstWord.Remove(0,1);
                secondWord = secondWord.Remove(0,1);
            }

            var remainingWord = firstWord.Length > secondWord.Length ? firstWord : secondWord;

            for (int i = 0; i < remainingWord.Length; i++)
            {
                sum += remainingWord[i];
            }

            Console.WriteLine(sum);
        }
    }
}