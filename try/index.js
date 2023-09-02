// 제시된 데이터
var data = [
  { name: "user1", group: 1 },
  { name: "user2", group: 1 },
  { name: "user3", group: 2 },
];

// 버튼 요소들을 가져옵니다.
var btn1 = document.querySelector(".btn.btn1");
var btn2 = document.querySelector(".btn.btn2");
var btn3 = document.querySelector(".btn.btn3");

// activateItem 함수를 정의합니다.
function activateItem(name, group) {
  alert(`Hi, ${name}! You are in group ${group}`);
}

// 각 버튼에 이벤트 리스너를 추가하여 클릭 시 activateItem 함수를 호출합니다.
btn1.addEventListener("click", function () {
  activateItem(data[0].name, data[0].group);
});

btn2.addEventListener("click", function () {
  activateItem(data[1].name, data[1].group);
});

btn3.addEventListener("click", function () {
  activateItem(data[2].name, data[2].group);
});
