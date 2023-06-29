function mainFunction () {
  const mainVariable = 'I am from main function'

  function subFunction () {
    console.log(`${mainVariable} inside the sub function`) // @logs 'I am from main function inside the sub function'
  };

  return subFunction
};

const result = mainFunction()
result()// Output: I am from main function inside the sub function
