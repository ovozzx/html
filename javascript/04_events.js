// 04_events.html에 있는 button 태그 가져오기
// var button = document.querySelector("button"); // 버튼 태그만 선택함

// console.log(button); // 이 시점에는 버튼이 없어서 null로 나옴
// undefined => 변수는 만들어져 있지만 값 할당되지 않는 상태
// null => undefined과 같음

window.onload = function () {
  // onload 1개만...
  var openLayerPopup = document.querySelector(".open-layer-popup");
  openLayerPopup.onclick = function () {
    var layerPopup = document.querySelector(".layer-popup");
    layerPopup.showModal(); // dialog 태그에만 있는 함수
  };
  var openWindowPopup = document.querySelector(".open-window-popup");
  openWindowPopup.onclick = function () {
    window.open(
      "https://coupang.com",
      undefined, // 브라우저를 생성할 위치 -> 따로 주지 않겠다
      "left=100,top=100,width=320,height=320"
    );
  };
  var moveToNaver = document.querySelector(".move-to-naver");
  moveToNaver.onclick = function () {
    window.location.href = "https://www.naver.com";
  };
  // var clickMe = document.querySelector(".click-me");
  // var showNumbers = document.querySelector(".show-numbers");
  // clickMe.onclick = function () {
  //   for (var i = 1; i < 10000; i++) {
  //     console.log("반복중......");
  //     showNumbers.innerText += i + " "; // 브라우저켜면 버튼 안눌려짐(for문 동작때문)
  //   }
  // };
  // 렌더링 이후 시작되도록
  // (1) interval을 이용한 타이머 => 꾸준하게 반복
  var intervalSeconds = 30;
  var intervalId = setInterval(function () {
    var minutes = intervalSeconds / 60;
    var seconds = intervalSeconds % 60;
    intervalSeconds--;
    var intervalTimer = document.querySelector(".interval-timer");
    var minutesElement = intervalTimer.querySelector(".minutes"); // intervalTimer에서 .minutes
    var secondsElement = intervalTimer.querySelector(".seconds"); // intervalTimer에서 .seconds
    minutesElement.innerText = parseInt(minutes);
    secondsElement.innerText = seconds;
    if (intervalSeconds === -1) {
      clearInterval(intervalId); // 이 id를 가지고 있는 interval을 끝내라 => 화면이 멈춰버림
      // 중간에 중단하고 싶을 때 활용
    }
  }, 1000); // 1000ms 마다 설정한 함수 동작 => 정확한 1초가 아님 (함수 내용에 따라서 밀림)
  console.log(intervalId); // 스레드 id 줌
  // (2) timeout을 이용한 타이머 => 정확한 주기
  // 함수의 실행을 지연시킴
  var timeeoutSeconds = 20;
  var timeoutId = setTimeout(function () {
    function timer() {
      if (timeeoutSeconds > 0) {
        // setTimeout은 한번만 실행되기때문에 이 조건만 넣어도 끝남
        setTimeout(function () {
          timer(); // 재귀 호출
        }, 1000);
      }

      var minutes = timeeoutSeconds / 60;
      var seconds = timeeoutSeconds % 60;
      timeeoutSeconds--;
      var timeoutTimer = document.querySelector(".timeout-timer");
      var minutesElement = timeoutTimer.querySelector(".minutes"); // intervalTimer에서 .minutes
      var secondsElement = timeoutTimer.querySelector(".seconds"); // intervalTimer에서 .seconds
      minutesElement.innerText = parseInt(minutes);
      secondsElement.innerText = seconds;
    }
    timer();
  }, 1000); // 1초 뒤에 실행해라!
  console.log(timeoutId);
};

console.log(window);
// 페이지를 벗어나려고 할 때 이벤트 (ex) 뒤로가기
// 블로그에 글을 작성하는 중에 뒤로 가기를 누른다
// "이 페이지를 벗어나시겠습니까? 저장되지 않는 정보는 사라집니다." => 이것만 가능
window.onbeforeunload = function (event) {
  //alert("페이지를 벗어납니다!"); 보안 취약점으로 브라우저 자체에서 막힘
  var userInput = document.querySelector(".user-input");
  if (userInput !== "") {
    // 텍스트 박스에 글 작성했을 때만
    event.returnValue = true; // 될때 안될때 있음
  }
  // return true;
};

window.onblur = function () {
  // 브라우저가 포커스를 잃으면 (다른 거 클릭하면)
  // 태그 동적 생성
  var newDiv = document.createElement("div");
  console.log(newDiv);
  // 태그에 스타일 부여
  newDiv.className = "block";
  var body = document.querySelector("body");
  // 렌더링 하지 않아서 안 보임 (태그 만들면 필수)
  // body 태그 아래에 newDiv를 추가한다
  // newDiv에 대한 렌더링 수행
  body.append(newDiv); // body 아래에 newDiv 추가 => 렌더링 진행됨
  //body.innerText = ""; // body에 있는 모든 텍스트를 지워라 => 복구 안됨
};

window.onfocus = function () {
  var blockDiv = document.querySelector(".block");
  console.dir(blockDiv);
  blockDiv.remove();
};

// 브라우저가 04_events.html 파일의 렌더링을 완료했을 때 실행되는 함수 = onload
// 렌더링 이벤트, 젤 먼저 써줘야 함
// - html 파일
// ⇒ html 파일 내용 분석
// ⇒ Tag → 인스턴스 → element
//     ⇒ DOM Tree
//     ⇒ 렌더링 📌 완료되면 스크립트 실행
//     렌더링 언제 끝날지 모름 ⇒ 끝날 때 실행되는 함수 onload 존재
// window.onload = function () {
//   var userInput = document.querySelector(".user-input");
//   var userInputText = document.querySelector(".user-input-text");
//   console.dir(userInput); // input.user-input
//   console.dir(userInputText); // div.user-input-text
//   // key 뗏을 때 처리
//   userInput.onkeyup = function (event) {
//     // down은 검사라서 1개씩 밀림
//     console.log(event.target.value);
//     //userInputText에 입력값 넣기
//     userInputText.innerText = event.target.value;
//   }; // 이벤트 파라미터 받기

//   var resultNodeList = document.querySelectorAll(".result");
//   console.dir(resultNodeList);
//   for (var i = 0; i < resultNodeList.length; i++) {
//     // 각 .result 요소에 클릭 이벤트 핸들러 등록, 브라우저가 클릭 이벤트 발생 시 event 객체를 자동으로 넘겨줌.
//     resultNodeList[i].onclick = function (event) {
//       // 브라우저는 onkeyup 이벤트가 발생하면 이 콜백을 호출하면서 **이벤트 객체(Event Object)**를 첫 번째 인자로 자동 전달합니다.
//       // PointerEvent => target으로 클릭 대상 알 수 있음
//       var clickedResult = event.target;
//       console.log(clickedResult);
//       if (clickedResult.className.includes("clicked")) {
//         clickedResult.className = "result";
//       } else {
//         clickedResult.className = "result clicked"; // <div class="result clicked"></div> 됨
//       }
//       // console.log(event);
//     };
//   }
// for (var i = 0; i < resultNodeList.length; i++) {
//   resultNodeList[i].onclick = (function (index) {
//     return function () {
//       if (resultNodeList[index].className.includes("clicked")) {
//         resultNodeList[index].className = "result";
//       } else {
//         resultNodeList[index].className = "result clicked";
//       }
//     }; // 즉시 실행 함수 return 함수 값을 onclick에게 할당 => 잘 안쓰는 방식
//   })(i);
// resultNodeList[i].onclick = function () {
//   // 이벤트를 할당만 해줌. 이벤트가 언제 발생?
//   // 콜백 문제라서 즉시 실행 함수 사용해야 함
//   console.log(i, resultNodeList, resultNodeList[i]); // 3 NodeList(3) [div.result, div.result, div.result]0: div.result1: div.result2: div.resultlength: 3[[Prototype]]: NodeList undefined
//   if (resultNodeList[i].className.includes("clicked")) {
//     resultNodeList[i].className = "result";
//   } else {
//     resultNodeList[i].className = "result clicked";
//   }
// };

// console.dir(div);
// var button = document.querySelector("button");
// console.dir(button); // element가 나옴
// button.onclick = function () {
//   // var div = document.querySelector(".result");

//   for (var i = 0; i < div.length; i++) {
//     // 배열이라서 for문 사용 필요 안쓰면 에러남
//     if (div[i].className.includes("clicked")) {
//       // 토글
//       div[i].className = "result";
//     } else {
//       div[i].className = "result clicked"; /* result 안쓰면 에러 남 */
//     }
//   }

//div.className = "result clicked";
//alert("클릭하셨네요?");
//button.addEventListener("click", function () {}); // 콜백 형태
