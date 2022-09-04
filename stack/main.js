const Stack = require('./Stack');

// Run this code to test Stack class.
const pizzaStack = new Stack(6);
for (let n = 1; n < 7; n++) {
  pizzaStack.push('Pizza #' + n)
}

// Pushing another pizza to check for overflow.
try {
  pizzaStack.push('Pizza #' + 7)
} catch(e) {
  console.log(e)
}

// Peek at the pizza on the top of stack and log its value.

console.log(`The first pizza to deliver is ${pizzaStack.peek()}`)

// Deliver all the pizzas from the top of the stack down.

pizzaStack.pop();
pizzaStack.pop();
pizzaStack.pop();
pizzaStack.pop();
pizzaStack.pop();
pizzaStack.pop();

// Popping another pizza to check for empty stack.
try {
  pizzaStack.pop();
} catch(e) {
  console.log(e);
}
