/*
Understand function scope
▫️ Create a variable inside a function and try to access it outside the function.
▫️ Declare a variable outside a function and try to access it inside the function.
*/ 


const ouutsideVariableName = 'Zlatan Ibrahimovic'
const ouutsideVariableAge = '44'

const birthdayMessage = (age, name) => {
  const message = console.log(`Happy ${age}th birthday ${name}!`) // @logs Happy 24th birthday Declan Rice!
  const outsideMessage = console.log(`Happy ${ouutsideVariableAge}th birthday ${ouutsideVariableName}!`) // @logs Happy 44th birthday Zlatan Ibrahimovic!
}

birthdayMessage(24, 'Declan Rice') // @logs Happy 24th birthday Declan Rice!
//  console.log(message); //@logs 'ReferenceError: message is not defined'
