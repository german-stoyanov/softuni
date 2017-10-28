namespace _5.Hands_of_Cards
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var powTypeDict = new Dictionary<string, int>();
            var input = Console.ReadLine();
            var sameCardChecker = new Dictionary<string, List<string>>();

            while (input != "JOKER")
            {
                var splittedInput = input.Split(new[] { ':' }, StringSplitOptions.RemoveEmptyEntries).ToList();
                var name = splittedInput[0];

                var str = input.Split(new[] { ':' }, StringSplitOptions.RemoveEmptyEntries).ToList();
                str.RemoveAt(0);
                var removeName = string.Concat(str);

                var power = removeName.Split(new[] { 'C', 'H', 'S', 'D', ' ', ',' }, StringSplitOptions.RemoveEmptyEntries).ToList();

                var typeSplitters = "2345678910JQKA, ".ToArray();
                var type = removeName.Split(typeSplitters, StringSplitOptions.RemoveEmptyEntries).ToList();

                var cardTypeList = new List<string>();

                if (sameCardChecker.ContainsKey(name))
                {
                    foreach (var value in sameCardChecker[name])
                    {
                        cardTypeList.Add(value);
                    }
                }

                sameCardChecker[name] = cardTypeList;

                for (int i = 0; i < power.Count; i++)
                {
                    var sameCardCheckerBool = true;
                    var currentCard = power[i] + type[i];

                    foreach (var value in sameCardChecker[name])
                    {
                        if (value.Contains(currentCard))
                        {
                            sameCardCheckerBool = false;
                            continue;
                        }
                    }

                    var powerValue = 0;
                    var typeValue = 0;
                    var sum = 0;

                    cardTypeList.Add(power[i] + type[i]);

                    if (sameCardCheckerBool)
                    {
                        powerValue = GetCardPower(power[i]);
                        typeValue = GetCardType(type[i]);
                        sum = powerValue * typeValue;

                        if (powTypeDict.ContainsKey(name))
                        {
                            powTypeDict[name] += sum;
                        }

                        else
                        {
                            powTypeDict[name] = sum;
                        }
                    }
                }

                input = Console.ReadLine();
            }

            foreach (var powerType in powTypeDict)
            {
                Console.WriteLine($"{powerType.Key}: {powerType.Value}");
            }
        }

        static int GetCardPower(string power)
        {
            try
            {
                return int.Parse(power);
            }
            catch (Exception)
            {
                switch (power)
                {
                    case "J":
                        return 11;
                    case "Q":
                        return 12;
                    case "K":
                        return 13;
                    case "A":
                        return 14;
                    default:
                        return 0;
                }
            }
        }

        static int GetCardType(string type)
        {
            switch (type)
            {
                case "S":
                    return 4;
                case "H":
                    return 3;
                case "D":
                    return 2;
                case "C":
                    return 1;
                default:
                    return 0;
            }
        }
    }
}