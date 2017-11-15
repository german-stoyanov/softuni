using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Problem_4.Files
{
    public class File
    {
        public File(string root, string fileNameAndExt, long fileSize)
        {
            this.Root = root;
            this.FileNameAndExtension = fileNameAndExt;
            this.FileSize = fileSize;
        }

        public string Root { get; set; }
        public string FileNameAndExtension { get; set; }
        public long FileSize { get; set; }
    }
   
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
           
            var pattern = new Regex(@"(?<roots>.*?)\\(.*)\\(?<filename>.*)\.(?<extension>.*?);(?<size>[\d]+)");
            var pattern2 = new Regex(@".*?;(.*)");
            var file = new List<File>();
            for (int i = 0; i < n; i++)
            {
                
                
                var input = Console.ReadLine();
                var match1 = pattern2.Match(input);
                var size = long.Parse(match1.Groups[1].ToString());
                var match = pattern.Match(input);
                var extention = match.Groups["extension"].Value;
                var root = match.Groups["roots"].Value;
                
                var filename = match.Groups["filename"].Value+"."+extention;
                //var size1 = input.Split(';');
                //var size = size1[1];
                var index = file.FindIndex(r => r.Root == root & r.FileNameAndExtension == filename);
                var fileAddInfo = new File(root, filename, size);

                if (index < 0)
                {
                    file.Add(fileAddInfo);
                }

                else
                {
                    file[index] = fileAddInfo;
                }
            }
            var thingsToOutput = Console.ReadLine().Split();
            var extension = thingsToOutput[0];
            var root1 = thingsToOutput[2];
            var count = 0;
            foreach (var item in file.Where(x => x.Root == root1&&x.FileNameAndExtension.EndsWith(extension)).OrderBy(x => -x.FileSize).ThenBy(x => x.FileNameAndExtension))
            {
                Console.WriteLine($"{item.FileNameAndExtension} - {item.FileSize} KB");
                count++;
            }
            if (count==0)
            {
                Console.WriteLine("No");
            }
        }
    }
}
