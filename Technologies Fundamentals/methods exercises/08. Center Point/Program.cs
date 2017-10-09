namespace _8.Center_Point
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

            GetCenterPoint(x1, y1, x2, y2);
        }

        static void GetCenterPoint(double x1, double y1, double x2, double y2)
        {
            if (Math.Sqrt(x1 * x1 + y1 * y1) <= Math.Sqrt(x2 * x2 + y2 * y2))
            {
                Console.Write($"({x1}, {y1})");
            }

            else
            {
                Console.Write($"({x2}, {y2})");
            }

            Console.WriteLine();
        }

       
    }
}