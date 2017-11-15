namespace _02.Extract_sentences_by_keyword
{
    using System;
    using System.Text.RegularExpressions;

    public class ExtractSentencesByKeyword
    {
        public static void Main()
        {
            var keyWord = Console.ReadLine();
            var text = Console.ReadLine();

            var matches = Regex.Split(text, @"[!\.\?]");

            foreach (string match in matches)
            {
                var splittedMatch = Regex.Split(match, @"[^A-Za-z]");

                foreach (var word in splittedMatch)
                {
                    if (word == keyWord)
                    {
                        Console.WriteLine(match.TrimStart().TrimEnd());
                    }
                }
            }
        }
    }
}

/*another solution:

var keyWord = Console.ReadLine();
var text = Console.ReadLine().Split(new string[] { '!', '.', '?' }, StringSplitOptions.RemoveEmptyEntries);

var pattern = "\\b" + keyWord + "\\b"
var regex = new Regex(pattern);

foreach (string match in matches)
{
    foreach (var word in splittedMatch)
    {
        if (regex.IsMatch(word))
        {
            Console.WriteLine(match.Trim());
        }
    }
}

*/
