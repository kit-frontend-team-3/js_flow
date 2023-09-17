function front3(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
  }
  console.log(arr.length);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === num) {
      arr.splice(j, 1);
      return arr;
    } else if (j === arr.length - 1 && arr[j] !== num) {
      return "결과값이 없습니다.";
    }
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const a = front3(arr, 18);
console.log(a);
