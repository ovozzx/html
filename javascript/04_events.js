// 04_events.html에 있는 button 태그 가져오기
// var button = document.querySelector("button"); // 버튼 태그만 선택함

// console.log(button); // 이 시점에는 버튼이 없어서 null로 나옴
// undefined => 변수는 만들어져 있지만 값 할당되지 않는 상태
// null => undefined과 같음

// 브라우저가 04_events.html 파일의 렌더링을 완료했을 때 실행되는 함수
// 렌더링 이벤트, 젤 먼저 써줘야 함
window.onload = function () {
  var button = document.querySelector("button");
  console.dir(button); // element가 나옴
  button.onclick = function () {
    var div = document.querySelector(".result");
    console.dir(div);

    if (div.className.includes("clicked")) {
      // 토글
      div.className = "result";
    } else {
      div.className = "result clicked"; /* result 안쓰면 에러 남 */
    }

    //div.className = "result clicked";
    //alert("클릭하셨네요?");
    //button.addEventListener("click", function () {}); // 콜백 형태
  };
};
