namespace _16.Instruction_Set
{
    using System;
    using System.Numerics;

    class InstructionSet_broken
    {
        static void Main()
        {
            string opCode = Console.ReadLine();

            BigInteger result = 0;

            while (opCode != "end")
            {
                string[] codeArgs = opCode.Split(' ');

                switch (codeArgs[0])
                {
                    case "INC":
                        {
                            BigInteger operandOne = int.Parse(codeArgs[1]);
                            result = operandOne + 1;
                            break;
                        }

                    case "DEC":
                        {
                            BigInteger operandOne = int.Parse(codeArgs[1]);
                            result = operandOne - 1;
                            break;
                        }

                    case "ADD":
                        {
                            BigInteger operandOne = int.Parse(codeArgs[1]);
                            BigInteger operandTwo = int.Parse(codeArgs[2]);
                            result = operandOne + operandTwo;
                            break;
                        }

                    case "MLA":
                        {
                            BigInteger operandOne = int.Parse(codeArgs[1]);
                            BigInteger operandTwo = int.Parse(codeArgs[2]);
                            result = operandOne * operandTwo;
                            break;
                        }

                    default:
                        return;
                }

                opCode = Console.ReadLine();

                Console.WriteLine(result);
            }
        }
    }
}
