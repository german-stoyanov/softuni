namespace _11.Geometry_Calculator
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var figureType = Console.ReadLine();

            if (figureType == "triangle")
            {
                GetTriangleArea(double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()));
            }

            else if (figureType == "square")
            {
                GetSquareArea(double.Parse(Console.ReadLine()));
            }

            else if (figureType == "rectangle")
            {
                GetRectangleArea(double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()));
            }

            else if (figureType == "circle")
            {
                GetCircleArea(double.Parse(Console.ReadLine()));
            }
        }

        static void GetTriangleArea(double side, double height)
        {
            Console.WriteLine("{0:f2}", side * height / 2);
        }

        static void GetSquareArea(double side)
        {
            Console.WriteLine("{0:f2}", side * side);
        }

        static void GetRectangleArea(double width, double height)
        {
            Console.WriteLine("{0:f2}", width * height);
        }

        static void GetCircleArea(double radius)
        {
            Console.WriteLine("{0:f2}", Math.PI * radius * radius);
        }
    }
}
