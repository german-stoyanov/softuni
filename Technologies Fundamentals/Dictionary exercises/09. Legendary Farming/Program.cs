namespace _9.Legendary_Farming
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine();

            var materials = new SortedDictionary<string, int>();

            var legendaryMaterials = new Dictionary<string, int>();
            legendaryMaterials.Add("fragments", 0);
            legendaryMaterials.Add("shards", 0);
            legendaryMaterials.Add("motes", 0);


            while (true)
            {
                var splittedInput = input.ToLower().Split(' ').ToArray();

                for (int i = 0; i < splittedInput.Count(); i += 2)
                {
                    //if the current material is already in the "materails" dictionary
                    if (materials.ContainsKey(splittedInput[i + 1]))
                    {
                        materials[splittedInput[i + 1]] += int.Parse(splittedInput[i]);

                        //if the item is legend, add it to the legend materails dictionary
                        if (splittedInput[i + 1] == "motes" || splittedInput[i + 1] == "shards" || splittedInput[i + 1] == "fragments")
                        {
                            legendaryMaterials[splittedInput[i + 1]] += int.Parse(splittedInput[i]);
                        }
                    }

                    else
                    {
                        materials.Add(splittedInput[i + 1], int.Parse(splittedInput[i]));

                        if (splittedInput[i + 1] == "motes" || splittedInput[i + 1] == "shards" || splittedInput[i + 1] == "fragments")
                        {
                            legendaryMaterials[splittedInput[i + 1]] = int.Parse(splittedInput[i]);
                        }
                    }

                    /* after every material and quantity, 
                     * check if the legend item quantity is bigger than 249
                     *  and if it is break the loop */

                    if (legendaryMaterials.ContainsKey("shards") && legendaryMaterials["shards"] > 249)
                    {
                        legendaryMaterials["shards"] -= 250;
                        Console.WriteLine("Shadowmourne obtained!");
                        goto Output;
                    }

                    if (legendaryMaterials.ContainsKey("fragments") && legendaryMaterials["fragments"] > 249)
                    {
                        legendaryMaterials["fragments"] -= 250;
                        Console.WriteLine("Valanyr obtained!");
                        goto Output;
                    }

                    if (legendaryMaterials.ContainsKey("motes") && legendaryMaterials["motes"] > 249)
                    {
                        legendaryMaterials["motes"] -= 250;
                        Console.WriteLine("Dragonwrath obtained!");
                        goto Output;
                    }
                }

                input = Console.ReadLine();
            }

            Output:

            var orderedLegendaryMaterials = from pair in legendaryMaterials
                                            orderby pair.Value descending,
                                                    pair.Key
                                            select pair;

            foreach (var item in orderedLegendaryMaterials)
            {
                materials.Remove(item.Key);
                Console.WriteLine($"{item.Key}: {item.Value}");
            }

            foreach (var junkItem in materials)
            {
                Console.WriteLine($"{junkItem.Key}: {junkItem.Value}");
            }
        }
    }
}