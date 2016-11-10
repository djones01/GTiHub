using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GTiHub.Models.EntityModel;
using System.Text;
using System.Collections;

namespace GTiHub.API.File_Handling
{
    public static class CondEvalHelpers
    {
        public static List<Token> TokensFromConditions(List<Condition> conditions)
        {
            if(conditions == null)
            {
                return null;
            }

            List<Token> tokens = new List<Token>();

            //Build Token list from conditions
            foreach(Condition condition in conditions)
            {
                if (condition.Chain_Operation != "") tokens.Add(new Token(Token.tokenDict[condition.Chain_Operation].Key, Token.tokenDict[condition.Chain_Operation].Value));
                if (condition.Left_Paren != "") tokens.Add(new Token(Token.TokenType.LEFT_PAREN));
                tokens.Add(new Token(Token.TokenType.LITERAL, Token.litTypeDict[condition.SourceField.Datatype], Token.SubType.SF, condition.SourceField.SourceId, condition.SourceField.Name));
                tokens.Add(new Token(Token.tokenDict[condition.Operation].Key, Token.tokenDict[condition.Operation].Value));
                tokens.Add(new Token(Token.TokenType.LITERAL, Token.litTypeDict[condition.SourceField.Datatype], Token.SubType.VAL, condition.Cond_Value));
                if (condition.Right_Paren != "") tokens.Add(new Token(Token.TokenType.RIGHT_PAREN));
            }

            return tokens;
        }

        public static List<Token> ConvertToReversePolish(List<Token> tokens)
        {
            if (tokens == null)
            {
                return null;
            }

            Queue<Token> outputQueue = new Queue<Token>();
            Stack<Token> stack = new Stack<Token>();

            for(int i = 0; i < tokens.Count; i++)
            {
                Token t = tokens[i];

                switch (t.type)
                {
                    case Token.TokenType.LITERAL:
                        outputQueue.Enqueue(t);
                        break;
                    case Token.TokenType.BINARY_OP:
                    case Token.TokenType.LEFT_PAREN:
                    case Token.TokenType.RELATION:
                        if(stack.Count > 0)
                            if (stack.Peek().type == Token.TokenType.RELATION)
                                outputQueue.Enqueue(stack.Pop());
                        stack.Push(t);
                        break;
                    case Token.TokenType.RIGHT_PAREN:
                        while (stack.Peek().type != Token.TokenType.LEFT_PAREN)
                        {
                            outputQueue.Enqueue(stack.Pop());
                        }
                        stack.Pop();
                        break;
                    default:
                        break;
                }
            }
            while (stack.Count > 0)
            {
                outputQueue.Enqueue(stack.Pop());
            }

            return outputQueue.ToList();
        }

        /// <summary>
        /// Evaluate the RPN expression for a given row
        /// </summary>
        /// <param name="row"></param>
        /// <param name="placeholders"></param>
        /// <param name="sourceTables"></param>
        /// <returns>List of tokens with sourcefield values filled in for a given row</returns>
        public static bool EvalRPNAtRow(int row, ref List<Token> tokens, ref Dictionary<int, SourceInfo> sourceTables)
        {
            //Iterate through tokens


            return true;
        }

    }

    public class Token
    {
        public static Dictionary<string, KeyValuePair<TokenType, string>> tokenDict = new Dictionary<string, KeyValuePair<TokenType, string>>()
        {
            {
                "(", new KeyValuePair<TokenType, string>(TokenType.LEFT_PAREN, "(")
            },
            {
                ")", new KeyValuePair<TokenType, string>(TokenType.RIGHT_PAREN, ")")
            },
            {
                "!=", new KeyValuePair<TokenType, string>(TokenType.RELATION, "!=")
            },
            {
                "=", new KeyValuePair<TokenType, string>(TokenType.RELATION, "=")
            },
            {
                "<=", new KeyValuePair<TokenType, string>(TokenType.RELATION, "<=")
            },
            {
                "<", new KeyValuePair<TokenType, string>(TokenType.RELATION, "<")
            },
            {
                ">=", new KeyValuePair<TokenType, string>(TokenType.RELATION, ">=")
            },
            {
                ">", new KeyValuePair<TokenType, string>(TokenType.RELATION, ">")
            },
            {
                "&&", new KeyValuePair<TokenType, string>(TokenType.BINARY_OP, "AND")
            },
            {
                "||", new KeyValuePair<TokenType, string>(TokenType.BINARY_OP, "OR")
            }
        };

        public static Dictionary<string, LitType> litTypeDict = new Dictionary<string, LitType>()
        {
            {
                "url", LitType.TEXT
            },
            {
                "text", LitType.TEXT
            },
            {
                "date", LitType.DATE
            },
            {
                "bool", LitType.BOOL
            },
            {
                "decimal", LitType.DEC
            },
            {
                "currency", LitType.CURR
            },
            {
                "email", LitType.TEXT
            }
        };

        public enum TokenType
        {
            LEFT_PAREN,
            RIGHT_PAREN,
            RELATION,
            BINARY_OP,
            LITERAL,
            EXPR_END
        }

        public enum LitType
        {
            DATE,
            DEC, 
            TEXT,
            BOOL,
            CURR
        }

        public enum SubType
        {
            SF,
            VAL
        }

        public TokenType type;
        public LitType? litType;
        public SubType? subType;
        public int? sourceId;
        public string sourceFieldName;
        public string value;

        /// <summary>
        /// Constructor for tokens like left and right parens
        /// </summary>
        /// <param name="type">Type of the token</param>
        /// <param name="value">Value of the token</param>
        public Token(TokenType type)
        {
            this.type = type;
            this.value = "";
        }

        /// <summary>
        /// Constructor for tokens other than sourcefields and comparative values
        /// </summary>
        /// <param name="type">Type of the token</param>
        /// <param name="value">Value of the token</param>
        public Token(TokenType type, string value)
        {
            this.type = type;
            this.value = value;
        }

        /// <summary>
        /// Constructor for tokens with preset values
        /// </summary>
        /// <param name="type">Type of the token</param>
        /// <param name="litType">Type of the literal</param>
        /// <param name="subType">Subtype of the token</param>
        /// <param name="value">Value of the literal</param>
        public Token(TokenType type, LitType litType, SubType subType, string value)
        {
            this.type = type;
            this.litType = litType;
            this.subType = subType;
            this.value = value;
        }

        /// <summary>
        /// Constructor for literal tokens with sourcefields
        /// </summary>
        /// <param name="type">Type of the token</param>
        /// <param name="litType">Type of the literal</param>
        /// <param name="subtype">Subtype of the token</param>
        /// <param name="sourceId">SourceId to look in for the sourcefield</param>
        /// <param name="sourceFieldName">Name of the sourcefield</param>
        public Token(TokenType type, LitType litType, SubType subType, int sourceId, string sourceFieldName)
        {
            this.type = type;
            this.subType = subType;
            this.litType = litType;
            this.sourceId = sourceId;
            this.sourceFieldName = sourceFieldName;
        }

        
    }
}
