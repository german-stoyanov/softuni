using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace problem_7
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();
            var input1 = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();
            var specialnumber = input1[0];
            var sum = 0;
            var tc = true;
            var range = input1[1];
            for (int i = 0; i < input.Count(); i++)
            {
                if (input[i]==specialnumber)
                {
                    if (i + range > input.Count - 1&& i - range < 0)
                    {
                        sum = 0;
                        tc = false;
                        break;
                    }
                    else if (i-range<0)
                    {
                        for (int b = i+range; b >= 0; b--)
                        {
                            input.RemoveAt(b);
                        }
                    }
                   
                    else if (i + range > input.Count - 1)
                    {
                        for (int c = input.Count-1; c >= i-range; c--)
                        {
                            input.RemoveAt(c);
                        }
                    }
                    else
                    {
                        for (int j = i+range; j >= i-range; j--)
                        {
                            input.RemoveAt(j);
                        }
                    }
                    i = 0;
                }
                
            }
            if (tc)
            {


                for (int i = 0; i < input.Count; i++)
                {
                    sum += input[i];
                }
            }
            Console.WriteLine(sum);
        }
    }
}
