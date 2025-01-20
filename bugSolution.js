function foo(a, b) {
  // Check for null or NaN values
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return 0; // Handle null and NaN values
  }
  return a + b; // Basic addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

//Now handles NaN correctly
console.log(foo(NaN,5)); //Output: 0