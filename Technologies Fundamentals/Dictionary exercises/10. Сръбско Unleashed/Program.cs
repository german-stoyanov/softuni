namespace _10.Сръбско_Unleashed
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using System.Text.RegularExpressions;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine();

            var singersConcertData = new Dictionary<string, Dictionary<string, long>>();

            AnotherTry:
            try
            {
                while (input != "End")
                {
                    var singerUnsplitted = Regex.Split(input, " @").ToList();
                    var singer = singerUnsplitted[0];

                    var venueUnsplittedFirst = singerUnsplitted[1].ToList();
                    venueUnsplittedFirst.RemoveAll(char.IsDigit);
                    var venueUnsplittedSecond = string.Concat(venueUnsplittedFirst);
                    var venueUnsplittedThird = Regex.Split(venueUnsplittedSecond, "  ").ToList();
                    var venue = venueUnsplittedThird[0];

                    var takeNumbers = input.Split(' ').Reverse().ToList();
                    var thicketPrice = long.Parse(takeNumbers[0]);
                    var thicketCount = long.Parse(takeNumbers[1]);
                    var thicketResult = thicketCount * thicketPrice;

                    if (!singersConcertData.ContainsKey(venue))
                    {
                        singersConcertData[venue] = new Dictionary<string, long>();
                    }

                    else if (singersConcertData[venue].ContainsKey(singer))
                    {
                        thicketResult += singersConcertData[venue][singer];
                    }

                    singersConcertData[venue][singer] = thicketResult;
                    input = Console.ReadLine();
                }
            }

            catch (Exception)
            {
                input = Console.ReadLine();
                goto AnotherTry;
            }

            foreach (var venue in singersConcertData)
            {
                Console.WriteLine(venue.Key);

                foreach (var singerMoneyEarn in venue.Value.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"#  {singerMoneyEarn.Key} -> {singerMoneyEarn.Value}");
                }
            }
        }
    }
}