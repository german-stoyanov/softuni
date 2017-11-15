namespace _01.Extract_emails
{
    using System;
    using System.Text.RegularExpressions;

    public class Program
    {
        public static void Main()
        {
            var text = Console.ReadLine();

            var regex = new Regex(@"[\w-.]+@[\w-]+(\.[\w-]+)+");
            var matches = regex.Matches(text);

            foreach (Match match in matches)
            {
                var matchString = match.ToString();

                if (!(matchString.StartsWith("-")
                    || matchString.StartsWith(".")
                    || matchString.StartsWith("_")
                    || matchString.EndsWith("-")
                    || matchString.EndsWith("_")
                    || matchString.EndsWith(".")))
                {
                    Console.WriteLine(match);
                }
            }
        }
    }
}