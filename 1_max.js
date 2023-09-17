function maxvalue(arr) {
  let z = arr.sort().reverse();
  return "MaxValue : " + arr[0] + "\n" + z;
}
const a = maxvalue([1, 2, 4, 3, 5]);
console.log(a);
