{
    "quiz": {
        "Id": 2,
        "name": "C# and .Net Framework",
        "description": "C# and .Net Quiz (contains C#, .Net Framework, Linq, etc.)"
    },
    "config":{
        "shuffleQuestions": true,
        "showPager": false,
        "allowBack": true,
        "autoMove": true
    },
    "questions": [{
        "Id": 1010,
        "Name": "Which of the following assemblies can be stored in Global Assembly Cache?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Private Assemblies", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Friend Assemblies", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Public Assemblies", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Shared Assemblies", "IsAnswer": true }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "Which of the following .NET components can be used to remove unused references from the managed heap?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Language Infrastructure", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CLR", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Garbage Collector", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Class Loader", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CTS", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1012,
        "Name": "Which of the following utilities can be used to compile managed assemblies into processor-specific native code?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "gacutil", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "ngen", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "dumpbin", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "ildasm", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1013,
        "Name": "Which of the following is NOT an Arithmetic operator in C#.NET?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "** (Double Star)", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "+ (Plus)", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "/ (Divide)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "% (Modulo)", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1014,
        "Name": "Which of the following statements is correct about an interface used in C#.NET?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "If a class implements an interface partially, then it should be an abstract class.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A class cannot implement an interface partially.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "An interface can contain static methods.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "An interface can contain static data.", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1015,
        "Name": "What does the term <strong>immutable</strong> means in term of string objects?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "We can modify characters included in the string", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "We cannot modify characters contained in the string", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "We cannot perform various operation of comparison, inserting, appending etc", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1016,
        "Name": "Which of the following is NOT a .NET Exception class?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Exception", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "StackMemoryException", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "DivideByZeroException", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "InvalidOperationException", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1017,
        "Name": "In C#.NET if we do not catch the exception thrown at runtime then which of the following will catch it?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Compiler", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CLR", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Linker", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Operating system", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1018,
        "Name": "Which of the following statements are correct about delegates?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Delegates cannot be used to call a static method of a class.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Delegates cannot be used to call procedures that receive variable number of arguments.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "If signatures of two methods are same they can be called through the same delegate object.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Delegates cannot be used to call an instance function. Delegates cannot be used to call an instance subroutine.", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1019,
        "Name": "Which of the following does NOT represent Integer?",
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Char", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Byte", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Short", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Long", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    }]
}