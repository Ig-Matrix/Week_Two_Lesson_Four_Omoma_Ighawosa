/*
 Use closure
▫️ Create a function that returns another function.
▫️ The inner function should have access to the variables defined in the outer function.
▫️ Call the outer function and store the returned inner function in a variable.
▫️ Call the inner function and observe that it still has access to the outer variables.

*/ 

function mainFunction () {
  const mainVariable = 'I am from main function'

  function subFunction () {
    console.log(`${mainVariable} inside the sub function`) // @logs 'I am from main function inside the sub function'
  };

  return subFunction
};

const result = mainFunction()
result()// Output: I am from main function inside the sub function
