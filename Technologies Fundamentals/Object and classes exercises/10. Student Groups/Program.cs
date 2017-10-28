namespace _10.Student_Groups
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Globalization;
    public class StudentClass
    {
        public StudentClass(string name, string email, DateTime date)
        {
            this.Name = name;
            this.Email = email;
            this.Date = date;
        }

        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime Date { get; set; }
    }
    public class Program
    {
        public static void Main()
        {
            var students = new Dictionary<string, List<StudentClass>>();
            var townSeats = new Dictionary<string, long>();

            var inputTownAndSeats = new string[2];
            var studyGroupString = string.Empty;

            var totalGroupsCounter = 0;

            while (studyGroupString != "End")
            {
                var currentGroupCounter = 0;
                var getSeats = new string[2];

                if (students.Count() == 0)
                {
                    inputTownAndSeats = Console.ReadLine().Split(new string[] { " => " }, StringSplitOptions.RemoveEmptyEntries);
                }

                else
                {
                    inputTownAndSeats = studyGroupString.Split(new string[] { " => ", }, StringSplitOptions.RemoveEmptyEntries);
                }

                getSeats = inputTownAndSeats[1].Split(' ');
                var currentTown = inputTownAndSeats[0];
                var currentSeats = long.Parse(getSeats[0]);

                students[currentTown] = new List<StudentClass>();
                townSeats.Add(currentTown, currentSeats);

                studyGroupString = Console.ReadLine();

                while (!studyGroupString.Contains("=>") && studyGroupString != "End")
                {
                    var studyGroup = studyGroupString.Split('|');

                    var name = studyGroup[0].TrimEnd().TrimStart();
                    var email = studyGroup[1].TrimEnd().TrimStart();
                    var date = DateTime.ParseExact(studyGroup[2].TrimEnd().TrimStart(), "d-MMM-yyyy", CultureInfo.InvariantCulture);

                    var studentsClassAdd = new StudentClass(name, email, date);
                    students[currentTown].Add(studentsClassAdd);
                    currentGroupCounter++;

                    if (currentGroupCounter == currentSeats)
                    {
                        totalGroupsCounter++;
                        currentGroupCounter = 0;
                    }

                    studyGroupString = Console.ReadLine();
                }

                if (currentGroupCounter > 0)
                {
                    totalGroupsCounter++;
                }
            }

            Console.WriteLine($"Created {totalGroupsCounter} groups in {students.Keys.Count()} towns:");

            foreach (var townAndSeats in students.OrderBy(x => x.Key))
            {
                var groupCounter = 0;
                var delitersCounter = 0;

                Console.Write($"{townAndSeats.Key} => ");

                foreach (var item in townAndSeats
                    .Value.OrderBy(x => x.Date)
                    .ThenBy(x => x.Name)
                    .ThenBy(x => x.Email))
                {
                    var deliter = ", ";

                    if (groupCounter == townSeats[townAndSeats.Key])
                    {
                        groupCounter = 0;

                        Console.WriteLine();
                        Console.Write($"{townAndSeats.Key} => ");
                    }

                    groupCounter++;
                    delitersCounter++;

                    if (groupCounter == townSeats[townAndSeats.Key] || delitersCounter == townAndSeats.Value.Count)
                    {
                        deliter = string.Empty;
                    }

                    Console.Write(item.Email + deliter);
                }

                Console.WriteLine();

            }
        }
    }
}