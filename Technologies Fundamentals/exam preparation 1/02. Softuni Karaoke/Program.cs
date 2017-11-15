namespace _01.Softuni_Karaoke
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class SoftuniKaraoke
    {
        public static void Main()
        {
            var peopleToSearch = Console.ReadLine().Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries).ToList();
            var songsToSearch = Console.ReadLine().Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries).ToList();
            var participantsInfo = new Dictionary<string, List<string>>();
            var input = Console.ReadLine();
            while (input!="dawn")
            {
                var splittedInput = input.Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries);
                var singerName = splittedInput[0];
                var songName = splittedInput[1];
                var awardName = splittedInput[2];
                if (peopleToSearch.Contains(singerName)&&songsToSearch.Contains(songName))
                {
                    if (!participantsInfo.ContainsKey(singerName))
                    {
                        participantsInfo[singerName] = new List<string>();
                    }
                    if (!participantsInfo[singerName].Contains(awardName))
                    {
                        participantsInfo[singerName].Add(awardName);
                    }
                }
                input = Console.ReadLine();
            }
            var awardCount = 0;
            foreach (var singer in participantsInfo.OrderBy(x => -x.Value.Count()).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{singer.Key}: {singer.Value.Count()} awards");
                foreach (var award in singer.Value.OrderBy(x => x))
                {
                    Console.WriteLine($"--{award}");
                    awardCount++;
                }
            }
            if (awardCount==0)
            {
                Console.WriteLine("No awards");
            }
        }
    }
}
