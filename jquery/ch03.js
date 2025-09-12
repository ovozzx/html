// 바닐라 스크립트
window.onload = function () {
  // 아이디가 france인 ul의 부모태그 (ul 아이디 destinations > li:nth-child(2))
  // 의 형제 태그 중 가장 마지막 태그의 텍스트를 "양평"으로 변경한다.
  // css 기준 : "#destinations > li:nth-child(2) + li"
  var france = document.querySelector("#france");
  console.dir(france); // parentElement : 부모 확인 가능
  var parent = france.parentElement; // nextElementSibling : 다음 형제
  console.dir(parent);
  var next = parent.nextElementSibling;
  next.innerText = "양평~";
  // 한줄 요약
  document.querySelector("#france").parentElement.nextElementSibling.innerText =
    "양평~~";
};
