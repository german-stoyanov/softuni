namespace _10.Student_Groups
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Team
    {
        public Team(string name, string creator, List<string> members)
        {
            this.TeamName = name;
            this.Creator = creator;
            this.Members = members;
        }

        public string TeamName { get; set; }
        public string Creator { get; set; }
        public List<string> Members { get; set; }
    }
    public class Program
    {
        public static void Main()
        {
            var linesCount = int.Parse(Console.ReadLine());

            var teamClass = new List<Team>();

            for (int i = 0; i < linesCount; i++)
            {
                var teamsInput = Console.ReadLine().Split('-');

                var user = teamsInput[0];
                var team = teamsInput[1];

                if (teamClass.Any(x => x.TeamName == team))
                {
                    Console.WriteLine($"Team {team} was already created!");
                }

                else if (teamClass.Any(x => x.Members.Contains(user)))
                {
                    Console.WriteLine($"{user} cannot create another team!");
                }

                else
                {
                    var teamAddInfo = new Team(team, user, new List<string>() { user });
                    teamClass.Add(teamAddInfo);

                    Console.WriteLine($"Team {team} has been created by {user}!");
                }
            }

            // JOINING USERS TO TEAMS
            var membersAndTeamInput = Console.ReadLine().Split(new string[] { "->" }, StringSplitOptions.None);

            while (membersAndTeamInput[0] != "end of assignment")
            {
                var user = membersAndTeamInput[0];
                var team = membersAndTeamInput[1];

                if (!teamClass.Any(x => x.TeamName == team))
                {
                    Console.WriteLine($"Team {team} does not exist!");
                }

                else if (teamClass.Any(x => x.Members.Contains(user)))
                {
                    Console.WriteLine($"Member {user} cannot join team {team}!");
                }

                else
                {
                    var newMember = teamClass.Where(x => x.TeamName == team).First();
                    newMember.Members.Add(user);
                }

                membersAndTeamInput = Console.ReadLine().Split(new string[] { "->" }, StringSplitOptions.None);
            }

            foreach (var team in teamClass
                .Where(x => x.Members.Count > 1)
                .OrderByDescending(x => x.Members.Count())
                .ThenBy(x => x.TeamName))
            {
                Console.WriteLine(team.TeamName);
                Console.WriteLine($"- {team.Creator}");

                foreach (var member in team.Members
                    .Where(x => x != team.Creator)
                    .OrderBy(x => x))
                {
                    Console.WriteLine($"-- {member}");
                }
            }

            Console.WriteLine("Teams to disband:");

            foreach (var disbandedTeam in teamClass
                .Where(x => x.Members.Count() == 1)
                .OrderBy(x => x.TeamName))
            {
                Console.WriteLine(disbandedTeam.TeamName);
            }
        }
    }
}
