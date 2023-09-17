let product = {
  야채곱창: 5,
  바나나우유: 10,
  삼각김밥: 15,
  도시락: 10,
  샌드위치: 10,
};

function check(name, count) {
  let item = product[name];
  if (!item) return console.log(name);
  if (item !== count) return console.log("전산표와 일치하지 않습니다");
  if (item === count) return console.log("전사표와 일치합니다");
}

check("바나나우유", 10);
