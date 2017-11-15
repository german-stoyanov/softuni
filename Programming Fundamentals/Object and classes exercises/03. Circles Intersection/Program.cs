namespace _3.Intersection_of_Circles
{
    using System;
    using System.Linq;
    public class Distance
    {
        public int X1 { get; set; }
        public int X2 { get; set; }
        public int Y1 { get; set; }
        public int Y2 { get; set; }
    }
    public class Program
    {
        public static void Main()
        {
            var circleC1 = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var circleC2 = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            var pointsFirstCircle = new Distance
            {
                X1 = circleC1[0],
                X2 = circleC1[1]
            };

            var pointsSecondCircle = new Distance
            {
                Y1 = circleC2[0],
                Y2 = circleC2[1]
            };

            var distance = GetDistance(pointsFirstCircle, pointsSecondCircle);

            var circleC1R = circleC1[2];
            var circleC2R = circleC2[2];

            var checkIntersection = CheckIntersection(circleC1R, circleC2R, distance);
            var result = checkIntersection ? "Yes" : "No";

            Console.WriteLine(result);
        }

        public static double GetDistance(Distance firstPoint, Distance secondPoint)
        {
            return Math.Sqrt(Math.Pow(firstPoint.X1 - secondPoint.Y1, 2)
                + Math.Pow(firstPoint.X2 - secondPoint.Y2, 2));
        }

        public static bool CheckIntersection(int circleC1R, int circleC2R, double distance)
        {
            return distance <= circleC1R + circleC2R;
        }
    }
}
