namespace _5.Book_Library
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Publisher { get; set; }
        public string ReleaseDate { get; set; }
        public string ISBNnumber { get; set; }
        public double Price { get; set; }
    }
    public class Program
    {
        public static void Main()
        {
            var linesCount = int.Parse(Console.ReadLine());

            List<Book> bookDataList = StoreEveryLibraryData(linesCount);
            Dictionary<string, double> totalSumOfPricesByAuthor = StoreTotalSumOfPricesByAuthor(bookDataList);
            PrintResult(totalSumOfPricesByAuthor);
        }

        public static List<Book> StoreEveryLibraryData(int linesCount)
        {
            var bookDataList = new List<Book>();

            for (int i = 0; i < linesCount; i++)
            {
                var inputData = Console.ReadLine().Split(' ');

                var bookTempData = new Book
                {
                    Title = inputData[0],
                    Author = inputData[1],
                    Publisher = inputData[2],
                    ReleaseDate = inputData[3],
                    ISBNnumber = inputData[4],
                    Price = double.Parse(inputData[5])
                };

                bookDataList.Add(bookTempData);
            }

            return bookDataList;
        }

        public static Dictionary<string, double> StoreTotalSumOfPricesByAuthor(List<Book> bookDataList)
        {
            var totalSumOfPricesByAuthor = new Dictionary<string, double>();

            foreach (var data in bookDataList)
            {
                if (!totalSumOfPricesByAuthor.ContainsKey(data.Author))
                {
                    totalSumOfPricesByAuthor[data.Author] = 0;
                }

                totalSumOfPricesByAuthor[data.Author] += data.Price;
            }

            return totalSumOfPricesByAuthor;
        }

        public static void PrintResult(Dictionary<string, double> resultDict)
        {

            foreach (var item in resultDict.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
            {
                Console.WriteLine("{0} -> {1:f2}", item.Key, item.Value);
            }
        }
    }
}