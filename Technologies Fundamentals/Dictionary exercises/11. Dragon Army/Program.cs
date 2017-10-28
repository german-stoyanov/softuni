namespace _11.Dragon_Army
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            var linesCount = int.Parse(Console.ReadLine());

            var dragonsData = new Dictionary<string, SortedDictionary<string, int[]>>();
            var dragonStats = new Dictionary<string, int>();

            for (int i = 0; i < linesCount; i++)
            {
                var input = Console.ReadLine();

                var splittedInput = input.Split(' ').ToArray();

                var dragonType = splittedInput[0];
                var dragonName = splittedInput[1];
                var damage = splittedInput[2] == "null" ? 45 : int.Parse(splittedInput[2]);
                var health = splittedInput[3] == "null" ? 250 : int.Parse(splittedInput[3]);
                var armor = splittedInput[4] == "null" ? 10 : int.Parse(splittedInput[4]);

                if (!dragonsData.ContainsKey(dragonType))
                {
                    dragonsData[dragonType] = new SortedDictionary<string, int[]>();
                }

                if (!dragonsData[dragonType].ContainsKey(dragonName))
                {
                    dragonsData[dragonType][dragonName] = new int[3];
                }

                dragonsData[dragonType][dragonName][0] = damage;
                dragonsData[dragonType][dragonName][1] = health;
                dragonsData[dragonType][dragonName][2] = armor;
            }

            GetResult(dragonsData);
        }

        static void GetResult(Dictionary<string, SortedDictionary<string, int[]>> dragonsData)
        {
            foreach (var dragonType in dragonsData)
            {
                Console.WriteLine("{0}::({1:f}/{2:f}/{3:f})", dragonType.Key, dragonType.Value.Select(x => x.Value[0]).Average(),
                 dragonType.Value.Select(x => x.Value[1]).Average(), dragonType.Value.Select(x => x.Value[2]).Average());

                foreach (var dragonNameAndStats in dragonType.Value)
                {
                    Console.WriteLine(@"-{0} -> damage: {1}, health: {2}, armor: {3}", dragonNameAndStats.Key, dragonNameAndStats.Value[0],
                       dragonNameAndStats.Value[1], dragonNameAndStats.Value[2]);
                }
            }
        }
    }
}