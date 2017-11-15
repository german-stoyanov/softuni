namespace _05.Key_Replacer
{
    using System;
    using System.Linq;
    using System.Text;
    using System.Text.RegularExpressions;

    public class KeyReplacer
    {
        public static void Main()
        {
            var keys = Console.ReadLine();
            var text = Console.ReadLine();

            var startKey = GetStartKey(keys);
            var endKey = GetEndKey(keys);

            var regex = new Regex($"{startKey}(.+?){endKey}");
            var matches = regex.Matches(text);

            var concatenatedMessage = ConcatenateMatches(matches, endKey);

            if (concatenatedMessage.Length == 0)
            {
                Console.WriteLine("Empty result");
                return;
            }

            Console.WriteLine(concatenatedMessage);
        }

        private static string ConcatenateMatches(MatchCollection matches, string endKey)
        {
            var resultString = new StringBuilder();

            foreach (Match message in matches)
            {
                if (!message.Groups[1].ToString().Contains(endKey))
                {
                    resultString.Append(message.Groups[1].ToString());
                }
            }

            return resultString.ToString();
        }

        public static string GetStartKey(string keys)
        {
            return string.Concat(keys.TakeWhile(c => c != '|' & c != '<' & c != '\\'));
        }

        public static string GetEndKey(string keys)
        {
            return string.Concat(keys.Reverse().TakeWhile(c => c != '|' & c != '<' & c != '\\').Reverse()); ;
        }
    }
}