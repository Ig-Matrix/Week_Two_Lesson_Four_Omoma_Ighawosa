function add (num1, num2) {
  const result = num1 + num2
  return `${num1} + ${num2} = ${result}`
}

const answer = add(-10, 2)
console.log(answer) // @logs -10 + 2 = -8
