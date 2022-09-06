const factorial = (number = 10) => {
  // your code here
  return (number === 0) ? 1 : number * factorial(number - 1)
}

module.exports = factorial;