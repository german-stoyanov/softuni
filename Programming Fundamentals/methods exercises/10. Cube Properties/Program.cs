namespace _10.Cube_Properties
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var cubeSide = double.Parse(Console.ReadLine());
            var parameter = Console.ReadLine();

            if (parameter == "face")
            {
                CubeLenghtFaceDiagonals(cubeSide);
            }

            else if (parameter == "space")
            {
                CubeLenghtSpaceDiagonals(cubeSide);
            }

            else if (parameter == "volume")
            {
                CubeVolume(cubeSide);
            }

            else if (parameter == "area")
            {
                CubeSurfaceArea(cubeSide);
            }
        }

        static void CubeLenghtFaceDiagonals(double cubeSide)
        {
            Console.WriteLine("{0:f2}", Math.Sqrt(2 * Math.Pow(cubeSide, 2)));
        }

        static void CubeLenghtSpaceDiagonals(double cubeSide)
        {
            Console.WriteLine("{0:f2}", Math.Sqrt(3 * Math.Pow(cubeSide, 2)));
        }

        static void CubeVolume(double cubeSide)
        {
            Console.WriteLine("{0:f2}", Math.Pow(cubeSide, 3));

        }

        static void CubeSurfaceArea(double cubeSide)
        {
            Console.WriteLine("{0:f2}", (6 * Math.Pow(cubeSide, 2)));

        }
    }
}
