"use strict";
function main() {
    var variable = 5;
    var greaterThan4 = variable > 4;
    var lessThan4 = variable < 4;
    // cond => 5 > 4 => true
    if (greaterThan4) {
        console.log("Greater!");
    }
    else if (lessThan4) {
        console.log("Less!");
    }
    else {
        console.log("Equal!");
    }
    // for (start, condition, increment/decrement)
    // i++ is i=i+1
    // i-- is i=i-1
    for (var i = 0; i < variable; i++) {
        console.log("Curr loop value", i);
    }
    var currVal = 0;
    while (currVal < 4) {
        console.log("Curr while val", currVal);
        currVal++;
    }
    console.log("While loop done");
    printFullName("Antone", "Barinaga");
    printFullName("Brett", "Barinaga");
    printFullName("Xavier", "Barinaga");
    printFullName("Louis", "Barinaga");
    printFullName("Corinne", "Barinaga");
    printNameAndAge("Bob", 40);
    // add 5 5 => 5 + 5 => 10
    console.log(add(5, 5));
}
function printFullName(first, last) {
    console.log(first + " " + last);
}
function printNameAndAge(name, age) {
    console.log(name + " " + age);
}
function add(first, second) {
    return first + second;
}
main();
function lesson1() {
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
}
