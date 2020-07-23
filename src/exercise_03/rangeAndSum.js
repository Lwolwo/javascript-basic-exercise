export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const array = [];
  if (start === end) {
    return array;
  }

  if (end > start) {
    for (let i = start; i < end; i += 1) {
      array.push(i);
    }
    return array;
  }

  if (end < start) {
    for (let i = start; i > end; i -= 1) {
      array.push(i);
    }
    return array;
  }

  throw new Error('Please delete this line and implement the function');
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (numbers.length === 0) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    count += numbers[i];
  }
  return count;

  throw new Error('Please delete this line and implement the function');
}
