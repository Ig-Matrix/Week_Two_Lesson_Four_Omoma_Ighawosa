/*
Return a value from a function
▫️ Create a function named multiply that takes two parameters representing numbers.
▫️ Multiply the two numbers inside the function and return the result.
▫️ Call the function and store the returned value in a variable.
▫️ Log the variable to the console to see the multiplication result.

*/

function multiply(num1, num2) {
    const result = num1 * num2;
    return `${num1} x ${num2} = ${result}`;
}

const answer = multiply(3, 6);

console.log(answer); // @logs 3 x 6 = 18
