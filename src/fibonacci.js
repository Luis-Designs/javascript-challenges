const fibonacci = (n) => {
  // your code here
  let [prev, next] = [0, 1]
  let array = [next]
  for (let i = 0; i < n - 1; i++) {
    let fib = prev + next
    array = [...array, fib]
    prev = next
    next = fib
  }
  return array
}


module.exports = fibonacci;