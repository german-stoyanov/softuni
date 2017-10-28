namespace _1.Count_Working_Days
{
    using System;
    using System.Globalization;

    public class Program
    {
        public static void Main()
        {
            var startDateAsString = Console.ReadLine();
            var endDateAsString = Console.ReadLine();

            var startDate = DateTime.ParseExact(startDateAsString, "dd-MM-yyyy", CultureInfo.CurrentCulture);
            var endDate = DateTime.ParseExact(endDateAsString, "dd-MM-yyyy", CultureInfo.CurrentCulture);
            var workingDaysCounter = 0;

            for (DateTime i = startDate; i <= endDate; i = i.AddDays(1))
            {
                if (!IsHoliday(i))
                {
                    workingDaysCounter++;
                }
            }

            Console.WriteLine(workingDaysCounter);
        }

        public static bool IsHoliday(DateTime currentDate)
        {
            if ((currentDate.Day == 1 && currentDate.Month == 1)
                || (currentDate.Day == 3 && currentDate.Month == 3)
                || (currentDate.Day == 1 && currentDate.Month == 5)
                || (currentDate.Day == 6 && currentDate.Month == 5)
                || (currentDate.Day == 24 && currentDate.Month == 5)
                || (currentDate.Day == 6 && currentDate.Month == 9)
                || (currentDate.Day == 22 && currentDate.Month == 9)
                || (currentDate.Day == 1 && currentDate.Month == 11)
                || (currentDate.Day == 24 && currentDate.Month == 12)
                || (currentDate.Day == 25 && currentDate.Month == 12)
                || (currentDate.Day == 26 && currentDate.Month == 12)
                || currentDate.DayOfWeek == DayOfWeek.Saturday
                || currentDate.DayOfWeek == DayOfWeek.Sunday)
            {
                return true;
            }

            return false;
        }
    }
}