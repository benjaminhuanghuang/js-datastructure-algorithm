/*

Reverse the items in stack without using any additional data structure

https://www.youtube.com/watch?v=dQsZP8UvHVk&ab_channel=BytebyByte
*/

// O(N) * O(N)
function reverse(stack) {
  if (stack.length == 0) return stack;
  // O(N)
  function insertAtBottom(stack, val) {
    if (stack.length == 0) {
      stack.push(val);
      return;
    }
    const top = stack.pop();
    insertAtBottom(stack, val);
    stack.push(top);
  }

  const top = stack.pop();

  reverse(stack);

  insertAtBottom(stack, top);

  return stack;
}
