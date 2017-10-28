namespace _7.Population_Counter
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine();

            var countryPopulation = new Dictionary<string, Dictionary<string, long>>();

            while (input != "report")
            {
                var splittedInput = input.Split('|').ToArray();

                var city = splittedInput[0];
                var country = splittedInput[1];
                var population = int.Parse(splittedInput[2]);

                if (!countryPopulation.ContainsKey(country))
                {
                    countryPopulation[country] = new Dictionary<string, long>();
                }

                else if (countryPopulation[country].ContainsKey(city))
                {
                    countryPopulation[country][city] += population;
                }

                countryPopulation[country][city] = population;

                input = Console.ReadLine();
            }

            foreach (var country in countryPopulation
                .OrderByDescending(x => x.Value.Sum(y => y.Value)))
            {
                Console.WriteLine($"{country.Key} (total population: {country.Value.Values.Sum()})");

                foreach (var cityPopulation in country.Value.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"=>{cityPopulation.Key}: {cityPopulation.Value}");
                }
            }
        }
    }
}