// Vanillar Script를 이용해서
// 모든 li를 가져와 텍스트를 변경한다.
window.onload = function () {
  // 렌더링 끝나면 이 함수를 실행해라
  var list = document.querySelectorAll("li"); // "li:nth-child(2)")
  for (var i = 0; i < list.length; i++) {
    var listItem = list[i];
    listItem.innerText = "서울";
  }
};
