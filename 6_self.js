/*
  <문제. 엘리베이터>
  1.사람 몸무게를 담는 배열, 층수 입력값, 최대 층수, 최대 몸무게 값 <입력>
  2.엘리베이터에 탑승한 인원의 몸무게 합이 초과하면 "정원을 초과하였습니다" <출력>
  3.층수를 잘못 입력하면 "층수를 잘못 입력하셨습니다" <출력>
  4.몸무게, 층수 모두 알맞으면 "문이 닫힙니다 ()층으로 이동합니다" <출력>
*/
function 엘베(weightP, e1, maxW, maxF) {
  let weight = maxW;
  let floor = maxF;
  let total = 0;
  for (let i = 0; i < weightP.length; i++) {
    total = total + arr[i];
  }
  if (total > weight) {
    return console.log("정원을 초과하였습니다");
  } else if (e1 > floor) {
    return console.log("층수를 잘못 입력하셨습니다");
  } else {
    return console.log(`문이 닫힙니다 \n ${e1}층으로 이동합니다`);
  }
}
const arr = [45, 75, 48, 102];
엘베(arr, 14, 200, 15);
