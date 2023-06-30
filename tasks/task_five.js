/*
 Create a function expression
▫️ Declare a function expression named add that adds two numbers.
▫️ Assign the function expression to a variable.
▫️ Call the function using the variable and log the result.

*/ 


const add = function (num1, num2) {
  const result = num1 + num2
  return `${num1} + ${num2} = ${result}`
}

const answer = add(-10, 2)
console.log(answer) // @logs -10 + 2 = -8
