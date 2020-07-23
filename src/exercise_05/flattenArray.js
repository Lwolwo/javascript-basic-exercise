export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }

  const temp = [];
  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        temp.push(array[i][j]);
      }
    } else {
      temp.push(array[i]);
    }
  }
  return temp;

  // return Array.prototype.flat.call(array, 1);

  throw new Error('Please delete this line and implement the function');
}
