namespace _4.Fix_Emails
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var nameEmail = new Dictionary<string, string>();

            while (true)
            {
                var name = Console.ReadLine();

                if (name == "stop")
                {
                    break;
                }

                var email = Console.ReadLine();
                var domain = email.Split('.').ToArray();
                var domainEnd = domain[1];

                if (domainEnd != "us" && domainEnd != "uk")
                {
                    nameEmail[name] = email;
                }
            }

            foreach (var nameAndEmail in nameEmail)
            {
                Console.WriteLine($"{nameAndEmail.Key} -> {nameAndEmail.Value}");
            }
        }
    }
}
