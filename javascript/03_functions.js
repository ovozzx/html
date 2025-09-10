function testFunction() {
  console.log("반갑습니다.");
}

testFunction();

function getResult(numberOne, numberTwo, operator) {
  if (operator === "+") {
    return numberOne + numberTwo;
  } else if (operator === "-") {
    return numberOne - numberTwo;
  } else if (operator === "*") {
    return numberOne * numberTwo;
  } else if (operator === "/") {
    return numberOne / numberTwo;
  } else {
    return 0;
  }
}

var result = getResult(10, 20, "+");
console.log(result);

function print(msg) {
  console.log(msg);
  console.log(arguments);

  console.log("Print 함수 실행!");
  var number = 10;

  function info() {
    console.log("Info 함수 실행!");
    console.log(number);
  }
  info();
}

// info(); 오류 발생! 03_functions.js:37 Uncaught ReferenceError: info is not defined
print();
print("hello");
print("hello", "hi");

/**
 * callback
 * 함수를 변수에 할당하는 방법을 알아야 함
 */
// 익명 함수
// 익명 함수를 실행시키는 방법 2 가지
//  1. 즉시 실행 함수
//  2. 익명 함수를 변수에 할당
(function () {
  console.log("안녕하세요? 즉시 실행 함수입니다.");
})(); // 함수 만들자마자 실행 = 즉시 실행

(function (message) {
  console.log(message);
})("반갑습니다.");

var anonymousFunction = function (message) {
  console.log("함수 표현식입니다.");
  console.log(message);
};

anonymousFunction("1234");

// Callback Function
// 비동기 통신 --> 비동기 통신 ==> 시작 시점이 언제이고, 종료 시점이 언제인지 모르는 통신
// 동기 통신 ==> 시작 시점과 종료 시점을 정확하게 알 수 있는 통신
function asyncFunction(otherFunction) {
  console.log("엄청나게 오래 걸리는 함수입니다.");
  otherFunction();
}

asyncFunction(function () {
  console.log(
    "엄청나게 오래 걸리는 함수가 끝나면 이 함수가 실행될 예정입니다."
  );
});

// 함수로 하게되는 일?
// HTML 태그, CSS를 제어하는 일
