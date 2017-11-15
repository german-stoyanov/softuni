namespace _9.Longer_Line
{
    using System;

    public class Program
    {
        public static void Main()
        {
            double x1 = double.Parse(Console.ReadLine());
            double y1 = double.Parse(Console.ReadLine());
            double x2 = double.Parse(Console.ReadLine());
            double y2 = double.Parse(Console.ReadLine());
            double x3 = double.Parse(Console.ReadLine());
            double y3 = double.Parse(Console.ReadLine());
            double x4 = double.Parse(Console.ReadLine());
            double y4 = double.Parse(Console.ReadLine());

            GetLongerLane(x1, y1, x2, y2, x3, y3, x4, y4);
        }

        public static void GetLongerLane(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4)
        {
            double firstLineLength = Math.Sqrt(Math.Pow((x2 - x1), 2) + Math.Pow((y2 - y1), 2));
            double secondLineLength = Math.Sqrt(Math.Pow((x4 - x3), 2) + Math.Pow((y4 - y3), 2));


            if (firstLineLength >= secondLineLength)
            {
                bool isFirstLineCloser = IsFirstLineCloser(x1, y1, x2, y2);

                if (isFirstLineCloser)
                {
                    Console.Write($"({x1}, {y1})({x2}, {y2})");
                }

                else
                {
                    Console.Write($"({x2}, {y2})({x1}, {y1})");
                }

                Console.WriteLine();
            }

            else
            {
                bool isFirstLineCloser = IsFirstLineCloser(x3, y3, x4, y4);

                if (isFirstLineCloser)
                {
                    Console.Write($"({x3}, {y3})({x4}, {y4})");
                }

                else
                {
                    Console.Write($"({x4}, {y4})({x3}, {y3})");
                }

                Console.WriteLine();
            }
        }

        public static bool IsFirstLineCloser(double x1, double x2, double y1, double y2)
        {
            double firstLineLength = Math.Sqrt(x1 * x1 + y1 * y1);
            double secondLineLength = Math.Sqrt(x2 * x2 + y2 * y2);

            if (firstLineLength <= secondLineLength)
            {
                return true;
            }

            return false;
        }
    }
}