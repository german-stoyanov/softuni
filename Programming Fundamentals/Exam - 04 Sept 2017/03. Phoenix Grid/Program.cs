using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputline = Console.ReadLine();
            Regex pattern = new Regex(@"^([\S^_]{3}\.)+([\S^_]{3})*$");
            var arr = new string[] { " ", "_"};
            
            var info = new List<string>();
            while (inputline != "ReadMe")
            {
                var input = inputline.Split('.').ToList();
                var inputReverse = inputline.Reverse().ToArray();
                var normalinput = inputReverse.Reverse().ToArray();
                bool a = true;
                
                bool b = true;
                for (int i = 0; i < inputline.Length / 2; i++)
                {
                    if (inputline[i] != inputline[inputline.Length - 1 - i])
                    {
                        
                        b = false;
                        break;
                    }
                }
                bool d = true;
                if (inputline.Length!=3)
                {

                    if (inputline.Length%2==0)
                    {
                        d = false;
                    }
                    int br = 0;
                    for (int i = 3; i <= inputline.Length - 3; i += 4,br++)
                    {
                        
                        if (inputline[i] != '.')
                        {
                            d = false;
                            
                        }
                    }
                    if (inputline.Length != br + (br + 1) * 3)
                    {
                        d = false;
                    }
                }
                bool q = true;
                if (!pattern.IsMatch(inputline)&&inputline.Length!=3)
                {
                    q = false;
                }
                if (b&&d&&q)
                {
                    info.Add("YES");
                }
                else
                {
                    info.Add("NO");
                }
                inputline = Console.ReadLine();

            }
            Console.WriteLine(string.Join("\r\n",info));
        }
    }
}
