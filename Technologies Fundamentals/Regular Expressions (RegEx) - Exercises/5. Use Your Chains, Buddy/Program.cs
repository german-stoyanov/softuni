namespace _5.Use_Your_Chains__Buddy
{
    using System;
    using System.Linq;
    using System.Text;
    using System.Text.RegularExpressions;

    public class UseYourChainsBuddy
    {
        public static void Main()
        {
            var text = Console.ReadLine();

            var regex = new Regex(@"<p>(.+?)</p>");
            var matches = regex.Matches(text);
            var unconvertedText = string.Empty;

            foreach (Match match in matches)
            {
                unconvertedText += match.Groups[1];
            }

            var forbiddenSymbols = @"[^a-z0-9]+";
            unconvertedText = Regex.Replace(unconvertedText, forbiddenSymbols, " ");

            var result = string.Empty;

            foreach (var letter in unconvertedText)
            {
                var currentLetter = letter;

                if (letter >= 'a' && letter <= 'm')
                {
                    currentLetter = ConvertCharFromAToM(letter);
                }

                else if (letter >= 'n' && letter <= 'z')
                {
                    currentLetter = ConvertCharFromNToZ(letter);
                }

                result += currentLetter;
            }

            Console.WriteLine(result);
        }

        public static char ConvertCharFromAToM(char letter)
        {
            var algorithm = 'z' - 'n' + 1;

            return (char)(letter + algorithm);
        }

        public static char ConvertCharFromNToZ(char letter)
        {
            var algorithm = 'z' - 'n' + 1;

            return (char)(letter - algorithm);
        }
    }
}