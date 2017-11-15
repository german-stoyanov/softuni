namespace _3.A_Miner_Task
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var recourcesQuantityDict = new Dictionary<string, int>();

            while (true)
            {
                var recourses = Console.ReadLine();

                if (recourses == "stop")
                {
                    break;
                }

                var quantity = int.Parse(Console.ReadLine());

                if (!recourcesQuantityDict.ContainsKey(recourses))
                {
                    recourcesQuantityDict[recourses] = quantity;
                }

                else
                {
                    recourcesQuantityDict[recourses] += quantity;
                }
            }

            foreach (var recourse in recourcesQuantityDict)
            {
                Console.WriteLine($"{recourse.Key} -> {recourse.Value}");
            }
        }
    }
}
