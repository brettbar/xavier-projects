function main() {
    let value: number = 4;
    let name: string = "Xavier";
    let isOk: boolean = true;
    let names: string[] = ["Brett", "Xavier", "Antone"];

    let foo = 4;
    let condition = false;

    // math: +, -, /, *, %, ()   -> number
    // string: +                 -> string 
    // logical: >, <, >=, <=, !==, === -> boolean
    
    // 9
    let sum: number = 5 + 4;
    // 5    
    let division: number = 20 / 4;
    // 3
    let remainder: number = 27 % 4;

    let first: string = "Xavier";
    let last: string = "Barinaga";

    let full: string = first + " " + last;

    let bobsAge: number = 66;
    let isKid: boolean = (bobsAge <= 12);
    let isSenior: boolean = (bobsAge >= 65);

    console.log(isKid);
    console.log(isSenior);
}


main();
