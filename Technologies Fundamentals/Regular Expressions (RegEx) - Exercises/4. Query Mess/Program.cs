namespace _4.Query_Mess
{
    using System;
    using System.Collections.Generic;
    using System.Text.RegularExpressions;

    public class QueryMess
    {
        public static void Main()
        {
            var input = Console.ReadLine();
                   
            while (input != "END")
            {
                var splittedInput = input.Split('?');
                var urlSplit = splittedInput.Length == 1 ? splittedInput[0] : splittedInput[1];
                var pairs = urlSplit.Split('&');

                var dict = new Dictionary<string, List<string>>();

                foreach (var keyValuePair in pairs)
                {
                    var splittedKeyAndValue = keyValuePair.Split('=');
                    var currentKey = splittedKeyAndValue[0];
                    var currentValue = splittedKeyAndValue[1];

                    var keyPattern = @"(%20|\+)";
                    var keyWithSpaces = Regex.Replace(currentKey, keyPattern, " ");
                    var key = keyWithSpaces.Trim();

                    if (!dict.ContainsKey(key))
                    {
                        dict[key] = new List<string>();
                    }

                    var valuePattern = @"(\+|%20)+";
                    var value = Regex.Replace(currentValue, valuePattern, " ").Trim();

                    dict[key].Add(value);
                }

                foreach (var key in dict)
                {
                    Console.Write($"{key.Key}=");
                    Console.Write($"[{string.Join(", ", key.Value)}]");
                }

                Console.WriteLine();

                input = Console.ReadLine();
            }
        }
    }
}