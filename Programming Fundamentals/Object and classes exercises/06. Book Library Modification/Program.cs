namespace _6.Book_Library_Modification
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Globalization;
    public class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Publisher { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string ISBNnumber { get; set; }
        public double Price { get; set; }
    }
    public class Program
    {
        public static void Main()
        {
            var linesCount = int.Parse(Console.ReadLine());

            List<Book> bookDataList = StoreEveryLibraryData(linesCount);

            var dateAsString = Console.ReadLine();
            var date = DateTime.ParseExact(dateAsString, "dd.MM.yyyy", CultureInfo.InvariantCulture);

            Dictionary<string, DateTime> totalSumOfPricesByAuthor = StoreTotalSumOfPricesByAuthor(bookDataList, date);

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
                    ReleaseDate = DateTime.ParseExact(inputData[3], "dd.MM.yyyy", CultureInfo.InvariantCulture),
                    ISBNnumber = inputData[4],
                    Price = double.Parse(inputData[5])
                };

                bookDataList.Add(bookTempData);
            }

            return bookDataList;
        }

        public static Dictionary<string, DateTime> StoreTotalSumOfPricesByAuthor(List<Book> bookDataList, DateTime date)
        {
            var totalSumOfPricesByAuthor = new Dictionary<string, DateTime>();

            foreach (var data in bookDataList)
            {
                if (data.ReleaseDate.Date > date.Date)
                {
                    if (!totalSumOfPricesByAuthor.ContainsKey(data.Author))
                    {
                        totalSumOfPricesByAuthor[data.Title] = data.ReleaseDate;
                    }
                }
            }

            return totalSumOfPricesByAuthor;
        }

        public static void PrintResult(Dictionary<string, DateTime> resultDict)
        {
            foreach (var item in resultDict.OrderBy(x => x.Value).ThenBy(x => x.Key))
            {
                Console.WriteLine("{0} -> {1:f2}", item.Key, item.Value.ToString("dd.MM.yyyy"));
            }
        }
    }
}