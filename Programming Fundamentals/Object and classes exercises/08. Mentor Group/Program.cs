namespace _8.Mentor_group
{
    using System;
    using System.Globalization;
    using System.Collections.Generic;
    using System.Linq;
    public class NameCommentClass
    {
        public Dictionary<string, List<string>> NameComment { get; set; }
    }
    public class NameDateClass
    {
        public Dictionary<string, List<DateTime>> NameDate { get; set; }
    }
    public class Program
    {
        public static void Main()
        {
            var getOnlyTheName = Console.ReadLine().Split(' ').ToList();

            var concattedInput = string.Concat(getOnlyTheName);

            var nameDate = new Dictionary<string, List<DateTime>>();
            var formattetDate = new Dictionary<string, List<string>>();

            var endCheck = string.Join(" ", getOnlyTheName);

            while (endCheck != "end of dates")
            {
                var username = getOnlyTheName[0];
                getOnlyTheName.RemoveAt(0);
                concattedInput = string.Concat(getOnlyTheName);
                var date = concattedInput.Split(',');

                if (!nameDate.ContainsKey(username))
                {
                    nameDate[username] = new List<DateTime>();
                    formattetDate[username] = new List<string>();
                }

                for (int i = 0; i < date.Length; i++)
                {
                    DateTime dateTimeCheck;
                    if (DateTime.TryParseExact(date[i], "dd/MM/yyyy",
                 CultureInfo.InvariantCulture, DateTimeStyles.None, out dateTimeCheck))
                    {


                        nameDate[username].Add(dateTimeCheck);
                        formattetDate[username].Add(date[i]);
                    }
                }

                getOnlyTheName = Console.ReadLine().Split(' ').ToList();
                endCheck = string.Join(" ", getOnlyTheName);
            }

            var userComment = new Dictionary<string, List<string>>();

            var inputUserComment = Console.ReadLine().Split('-');

            while (inputUserComment[0] != "end of comments")
            {
                var name = inputUserComment[0];
                var comment = inputUserComment[1];

                if (nameDate.ContainsKey(name))
                {
                    if (!userComment.ContainsKey(name))
                    {
                        userComment[name] = new List<string>();
                    }

                    userComment[name].Add(comment);
                }

                inputUserComment = Console.ReadLine().Split('-');
            }

            foreach (var nameAndDate in nameDate.OrderBy(x => x.Key))
            {
                Console.WriteLine(nameAndDate.Key + "\nComments:");

                if (userComment.ContainsKey(nameAndDate.Key))
                {
                    foreach (var commentOfUser in userComment[nameAndDate.Key])
                    {
                        Console.WriteLine("- " + string.Join("\n- ", commentOfUser));
                    }
                }

                var orderedDates = new List<string>();

                foreach (var item in formattetDate[nameAndDate.Key].
                    OrderBy(x => DateTime.ParseExact(x, "dd/MM/yyyy", CultureInfo.InvariantCulture)))
                {
                    orderedDates.Add(item);
                }

                Console.WriteLine("Dates attended:");
                foreach (var item in orderedDates)
                {
                    Console.WriteLine($"-- {item}");
                }
            }
        }
    }
}
