/*
Use default parameter values
1. Modify the greet function to have a default parameter value of "Guest" for the name.
2. If no argument is passed when calling the function, it should use the default value.
3. Call the function both with and without passing a name argument.

*/ 

function greet (name = 'Guest') {
  console.log(`Hello, my name is ${name}`)
};

greet() // @logs Hello, my name is Guest
greet('IG') // @logs Hello, my name is IG

