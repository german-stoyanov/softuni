namespace _2.Phonebook_Upgrade
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
            var name = string.Empty;
            var number = string.Empty;
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

                    else
                    {
                        phoneBook[name] = number;
                    }
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

                else //if (command == "ListAll")
                {
                    foreach (var contact in phoneBook.OrderBy(x => x.Key))
                    {
                        Console.WriteLine(contact.Key + " -> " + contact.Value);
                    }
                }


                input = Console.ReadLine().Split(' ').ToList();
                command = input[0];
            }

            //else //if (command == "ListAll")
            //{
            //    foreach (var contact in phoneBook.OrderBy(x => x.Key))
            //    {
            //        Console.WriteLine(contact.Key + " -> " + contact.Value);
            //    }

            //    return;
            //}

            //foreach (var contact in phoneBook)
            //{
            //    Console.WriteLine(contact.Key + " -> " + contact.Value);
            //}
        }
    }
}
