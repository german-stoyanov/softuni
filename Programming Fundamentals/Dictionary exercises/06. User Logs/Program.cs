namespace _6.User_Logs
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine().Split(' ').ToList();

            var userLogs = new SortedDictionary<string, Dictionary<string, int>>();

            while (input[0] != "end")
            {
                //initialise the count which will count the equal IP's
                var count = 1;

                //splitting the IP so we can get just the numbers
                var unsplittedIP = input[0].Split('=').ToList();
                unsplittedIP.RemoveAt(0);
                var IP = string.Concat(unsplittedIP);

                //splitting the name so we can get just the username
                var userNameUnsplitted = input[2].Split('=').ToList();
                var userName = userNameUnsplitted[1];

                var innerDict = new Dictionary<string, int>();

                if (userLogs.ContainsKey(userName))
                {
                    innerDict = userLogs[userName];

                    if (innerDict.ContainsKey(IP))
                    {
                        count = innerDict[IP];
                        innerDict[IP] = count++;
                    }

                    innerDict[IP] = count;
                }

                innerDict[IP] = count;
                userLogs[userName] = innerDict;

                input = Console.ReadLine().Split(' ').ToList();
            }

            foreach (var userName in userLogs)
            {
                Console.WriteLine($"{userName.Key}: ");

                var counter = 1;

                foreach (var userInfo in userName.Value)
                {
                    var countSplit = ".";
                    if (userName.Value.Count() > 1)
                    {
                        if (counter < userName.Value.Count())
                        {
                            countSplit = ", ";
                        }
                    }

                    Console.Write($"{userInfo.Key} => {userInfo.Value}{countSplit}");
                    counter++;
                }

                Console.WriteLine();
            }
        }
    }
}
