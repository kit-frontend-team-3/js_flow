function solution(arr) {
  let even = 0;
  let odd = 0;

  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return [even, odd];
}

const arr = [1, 2, 3, 4, 5];
const a = solution(arr);
console.log(a);
