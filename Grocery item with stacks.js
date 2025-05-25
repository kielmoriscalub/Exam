let groceryStack = [];

function peek() {
  return groceryStack.length === 0 ? "Stack is empty" : groceryStack[groceryStack.length - 1];
}

function push(item) {
  groceryStack.push(item);
  console.log("Stack after push:", groceryStack, ", Peek:", peek());
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty");
    return null;
  }
  let item = groceryStack.pop();
  console.log("Stack after pop:", groceryStack, ", Peek:", peek());
  return item;
}

for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}

pop(); //Example pop operation.