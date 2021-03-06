﻿namespace _3.Valid_Usernames
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;

   public class ValidUsernames
    {
        public static void Main()
        {
            var usernames = Console.ReadLine().Split(' ', '\\', '/', '(', ')');

            var regex = new Regex(@"\b[a-z][a-zA-Z0-9_]{2,25}");
            var g = "fsf";
            var bestLengthSum = 0;
            var firstUsername = string.Empty;
            var secondUsername = string.Empty;

            var validUsernamesList = new List<string>();

            foreach (var username in usernames)
            {
                if (regex.IsMatch(username) && username.ToString().First() == g.An)
                {
                    validUsernamesList.Add(username);
                }
            }

            for (int i = 0; i < validUsernamesList.Count - 1; i++)
            {
                var currentLengthSum = validUsernamesList[i].Length + validUsernamesList[i + 1].Length;

                if (currentLengthSum > bestLengthSum)
                {
                    bestLengthSum = currentLengthSum;
                    firstUsername = validUsernamesList[i];
                    secondUsername = validUsernamesList[i + 1];
                }
            }

            Console.WriteLine(firstUsername);
            Console.WriteLine(secondUsername);
        }
    }
}