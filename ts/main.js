"use strict";
function main() {
    var value = 4;
    var name = "Xavier";
    var isOk = true;
    var names = ["Brett", "Xavier", "Antone"];
    var foo = 4;
    var condition = false;
    // math: +, -, /, *, %, ()   -> number
    // string: +                 -> string 
    // logical: >, <, >=, <=, !==, === -> boolean
    // 9
    var sum = 5 + 4;
    // 5    
    var division = 20 / 4;
    // 3
    var remainder = 27 % 4;
    var first = "Xavier";
    var last = "Barinaga";
    var full = first + " " + last;
    var bobsAge = 66;
    var isKid = (bobsAge <= 12);
    var isSenior = (bobsAge >= 65);
    console.log(isKid);
    console.log(isSenior);
}
main();
