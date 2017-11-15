namespace Problem_9.Melrah_Shake
{
    using System;

    public class MelrahShake
    {
        public static void Main()
        {
            var mainString = Console.ReadLine();
            var pattern = Console.ReadLine();

            while (true)
            {
                if (mainString.IndexOf(pattern) != mainString.LastIndexOf(pattern))
                {
                    var indexOfFirstMatch = mainString.IndexOf(pattern);
                    var indexOfSecondMatch = mainString.LastIndexOf(pattern);

                    mainString = mainString.Remove(indexOfFirstMatch, pattern.Length);
                    mainString = mainString.Remove(indexOfSecondMatch - pattern.Length, pattern.Length);

                    Console.WriteLine("Shaked it.");
                }

                else
                {
                    break;
                }

                if (pattern.Length / 2 > 0)
                {
                    pattern = pattern.Remove(pattern.Length / 2, 1);
                }

                else
                {
                    break;
                }
            }

            Console.WriteLine("No shake.");
            Console.WriteLine(mainString);
        }
    }
}