namespace _4.Average_Grades
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class StudentData
    {
        public string Name { get; set; }
        public List<double> CurrentGrades { get; set; }
        public double AverageGrade { get; set; }
    }
    public class Program
    {
        public static void Main()
        {
            var studentCount = int.Parse(Console.ReadLine());

            var list = new List<StudentData>();

            for (int i = 0; i < studentCount; i++)
            {
                var studentData = Console.ReadLine().Split(' ').ToArray();
                var gradesList = new List<double>();

                for (int j = 1; j < studentData.Count(); j++)
                {
                    gradesList.Add(double.Parse(studentData[j]));
                }

                var studentClass = new StudentData
                {
                    Name = studentData[0],
                    CurrentGrades = gradesList,
                    AverageGrade = gradesList.Average()
                };

                list.Add(studentClass);
            }

            PrintStudentAverageGrade(list);
        }

        public static void PrintStudentAverageGrade(List<StudentData> list)
        {
            foreach (var studentData in list.OrderBy(x => x.Name).ThenByDescending(x => x.AverageGrade))
            {
                if (studentData.AverageGrade >= 5.00)
                {
                    Console.WriteLine("{0} -> {1:f2}", studentData.Name, studentData.AverageGrade);
                }
            }
        }
    }
}
