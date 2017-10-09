namespace _15.Substring
{
    using System;

    public class Program
    {
        public static void Main()
        {
            string text = Console.ReadLine();
            int jump = int.Parse(Console.ReadLine());

            bool hasMatch = false;

            for (int i = 0; i < text.Length; i++)
            {
                if (text[i] == 'p')
                {
                    hasMatch = true;

                    int endIndex = jump + 1;

                    if (endIndex > text.Length - i)
                    {
                        endIndex = text.Length - i;
                    }

                    string matchedString = text.Substring(i, endIndex);

                    Console.WriteLine(matchedString);
                    i += jump;

                }
            }

            if (hasMatch == false)
            {
                Console.WriteLine("no");
            }
        }
    }
}
