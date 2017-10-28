namespace _7.Andrey_and_billiard
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Shop
    {
        public Dictionary<string, double> ShopData { get; set; }
    }
    public class UserOrder
    {
        public SortedDictionary<string, Dictionary<string, int>> EntityQuantity { get; set; }
    }
    public class EntitiesPrices
    {
        public string Entity { get; set; }
        public double Price { get; set; }
    }
    public class Program
    {
        public static void Main()
        {
            var lineCount = int.Parse(Console.ReadLine());

            var shopClass = new Shop
            {
                ShopData = new Dictionary<string, double>()
            };

            for (int i = 0; i < lineCount; i++)
            {
                var input = Console.ReadLine().Split('-');

                var entity = input[0];
                var price = double.Parse(input[1]);

                shopClass.ShopData[entity] = price;
            }

            var clientOrderInput = Console.ReadLine().Split(new[] { '-', ',' }, StringSplitOptions.RemoveEmptyEntries);

            var classDict = new UserOrder
            {
                EntityQuantity = new SortedDictionary<string, Dictionary<string, int>>()
            };

            while (clientOrderInput[0] != "end of clients")
            {
                var client = clientOrderInput[0];
                var orderedEntity = clientOrderInput[1];
                var quantity = int.Parse(clientOrderInput[2]);

                if (shopClass.ShopData.ContainsKey(orderedEntity))
                {
                    if (!classDict.EntityQuantity.ContainsKey(client))
                    {
                        classDict.EntityQuantity[client] = new Dictionary<string, int>();
                    }

                    else if (classDict.EntityQuantity[client].ContainsKey(orderedEntity))
                    {
                        quantity += classDict.EntityQuantity[client][orderedEntity];
                    }

                    classDict.EntityQuantity[client][orderedEntity] = quantity;
                }

                clientOrderInput = Console.ReadLine().Split(new[] { '-', ',' }, StringSplitOptions.RemoveEmptyEntries);
            }

            decimal totalBill = 0.0m;
            decimal currentBill = 0.0m;

            foreach (var client in classDict.EntityQuantity)
            {
                currentBill = 0.0m;

                Console.WriteLine(client.Key);

                foreach (var order in client.Value)
                {
                    Console.WriteLine($"-- {order.Key} - {order.Value}");

                    currentBill += (decimal)(shopClass.ShopData[order.Key] * order.Value);
                }

                totalBill += currentBill;

                Console.WriteLine("Bill: {0:f2}", currentBill);
            }

            Console.WriteLine("Total bill: {0:f2}", totalBill);
        }
    }
}