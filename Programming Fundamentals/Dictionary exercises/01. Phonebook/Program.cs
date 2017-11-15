namespace _1.Phonebook
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine().Split(' ').ToList();

            var command = input[0];
            var name = " ";
            var number = " ";
            var phoneBook = new Dictionary<string, string>();

            while (command != "END")
            {
                if (command == "A")
                {
                    name = input[1];
                    number = input[2];

                    if (!phoneBook.ContainsKey(name))
                    {
                        phoneBook.Add(name, number);
                    }

                    phoneBook[name] = number;
                }

                else if (command == "S")
                {
                    name = input[1];

                    if (phoneBook.ContainsKey(name))
                    {
                        Console.WriteLine(name + " -> " + phoneBook[name]);
                    }

                    else
                    {
                        Console.WriteLine($"Contact {name} does not exist.");
                    }
                }

                input = Console.ReadLine().Split(' ').ToList();
                command = input[0];
            }
        }
    }
}