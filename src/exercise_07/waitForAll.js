export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  for (let i = 0; i < promises.length; i += 1) {
    if (!(promises[i] instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  }
  const results = [];
  const errors = [];

  // 使用一个数组记录是否出现reject
  for (let i = 0; i < promises.length; i += 1) {
    errors[i] = false;
    results.push(
      new Promise(resolve => resolve(promises[i]))
        .catch((error) => {
          errors[i] = true;
          return error;
        }),
    );
  }
  // 等待执行完所有promise，再去判断是否有reject
  return Promise.all(results).then((p) => {
    const index = errors.indexOf(true);
    if (index >= 0) {
      throw p[index];
    } else {
      return p;
    }
  });

  throw new Error('Please delete this line and implement the function');
}
