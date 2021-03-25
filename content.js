/* This script will customize the greeting depending on time of day*/

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'I!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

var MLstrings = [
    {
        English: "Hello",
        Amharic: "Selam",
    },
    {   
        English: "Bye",
        Amharic: "Ciao",
    }
]

var MLcode = [
    {
        code: "us",
        name: "English",},
    {   code: "et",
        name: "amharic",}]
