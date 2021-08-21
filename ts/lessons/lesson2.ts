function lesson2() {
  const variable = 5;


  const greaterThan4 = variable > 4;
  const lessThan4 = variable < 4;

  // cond => 5 > 4 => true
 
  if (greaterThan4) {
    console.log("Greater!");
  } else if (lessThan4) {
    console.log("Less!");
  } else {
    console.log("Equal!");
  }

  // for (start, condition, increment/decrement)
  // i++ is i=i+1
  // i-- is i=i-1
  for (let i=0; i < variable; i++) {
    console.log("Curr loop value", i);
  }

  let currVal = 0;
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

function printFullName(first: string, last: string) {
  console.log(first + " " + last);
}

function printNameAndAge(name: string, age: number) {
  console.log(name + " " + age);
}

function add(first: number, second: number) {
  return first + second;
}
