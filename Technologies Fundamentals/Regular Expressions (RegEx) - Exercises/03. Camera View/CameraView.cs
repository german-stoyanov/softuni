namespace _03.Camera_View
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;

    public class CameraView
    {
        public static void Main()
        {
            var numbers = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            var charsToSkip = numbers[0];
            var charsToTake = numbers[1];
            var text = Console.ReadLine();

            var regex = new Regex(@"\|<(\w+)");
            var matches = regex.Matches(text);
            var cameras = new List<string>();

            foreach (Match camera in matches)
            {
                var convertedString = string.Concat
                    (camera.ToString()
                    .Skip(charsToSkip + 2)
                    .TakeWhile(x => x != '|')
                    .Take(charsToTake));

                cameras.Add(string.Concat(convertedString));
            }

            Console.WriteLine(string.Join(", ", cameras));
        }
    }
}