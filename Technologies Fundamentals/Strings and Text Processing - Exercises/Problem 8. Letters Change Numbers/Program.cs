//namespace Problem_8.Letters_Change_Numbers
//{
//    using System;
//    using System.Linq;

//    public class Program
//    {
//        public static void Main()
namespace Problem_8.Letters_Change_Numbers
{
    using System;
    using System.Linq;
    using System.Text.RegularExpressions;

    public class LettersChangeNumbers
    {
        public static void Main()
        {
            var input = Console.ReadLine();

            var regex = new Regex(@"[A-Za-z]\d+[A-Za-z]");
            var matches = regex.Matches(input);

            var totalSum = 0.0;
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            foreach (var sequence in matches)
            {
                var currentSequence = sequence.ToString();

                var firstLetter = currentSequence.First();
                var secondLetter = currentSequence.Last();

                var currentSum = double.Parse(string.Concat(currentSequence.Skip(1).Take(currentSequence.Length - 2)));

                var firstLetterPosition = alphabet.IndexOf(firstLetter.ToString().ToUpper()) + 1;
                var secondLeterPosition = alphabet.IndexOf(secondLetter.ToString().ToUpper()) + 1;

                if (char.IsLower(firstLetter))
                {
                    currentSum *= firstLetterPosition;
                }

                else if (char.IsUpper(firstLetter))
                {
                    currentSum /= firstLetterPosition;
                }

                if (char.IsLower(secondLetter))
                {
                    currentSum += secondLeterPosition;
                }

                else if (char.IsUpper(secondLetter))
                {
                    currentSum -= secondLeterPosition;
                }

                totalSum += currentSum;
            }

            Console.WriteLine("{0:f2}", totalSum);
        }
    }
}