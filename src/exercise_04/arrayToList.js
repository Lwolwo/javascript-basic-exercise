export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }

  const head = new Node(array[0]);
  let node = head;
  for (let i = 1; i < array.length; i += 1) {
    const temp = new Node(array[i]);
    node.next = temp;
    node = node.next;
  }
  return head;

  throw new Error('Please delete this line and implement the function');
}
