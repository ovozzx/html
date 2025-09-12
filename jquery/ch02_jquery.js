// window.onload = function () {};
// 위 내용과 jquery 기준 대응되는 내용
//$(document).ready(function () {
$().ready(function () {
  // () 안에 document 값이 디폴트로 들어감
  var list = $("li");
  //var list = $("li:last-child");
  //var listEven = $("li:nth-child(:even)"); // css로 접근이 느림
  //   // 각 li 태그들의 content를 text로 가져온다 (getter)
  //   var listItemText = list.text(); // 바닐라 스크립트에서는 "반복"해야함
  //   console.log(listItemText); // 한번에 붙어서 나옴
  list.text("서울"); // 각 li 태그들의 content를 "서울"로 변경한다.
  // 함수 파라미터 있음 => setter
  // 함수 파라미터 없음 => getter
  // 1. p 태그의 text를 조회해서 콘솔로 출력한다.
  var pList = $("p");
  console.log(pList.text());
  // 2. h2 태그의 text를 "여행 상세"로 변경한다.
  var hList = $("h2");
  hList.text("여행 상세");
  // 3. 클래스가 "promo"인 li의 텍스트를 "리오"로 변경한다.
  var promo = $("li.promo");
  promo.text("리오");
  // li의 첫 번째 항목의 텍스트를 "부산"으로 변경한다
  $("li:first-child").text("부산");
  // li의 두 번째 항목의 텍스트를 "경주"로 변경한다
  $("li:nth-child(2)").text("경주");
  // Dom Traversing을 통해서 li의 첫 번째 항목의 텍스트를 "부산"으로 변경한다
  // li의 첫 번째 항목의 텍스트를 "부산"으로 변경한다
  $("li").first().text("부산2"); // 위에 방식보다 훨씬 빠름!
  $("li").last().text("속초");
  // 방법 다양
  // li의 두 번째 항목의 텍스트를 "경주"로 변경한다
  $("li").eq(1).text("경주2"); // 0부터 시작, 2번째 것
  $("li").first().next().text("경주(first-next)");
  $("li").last().prev().text("경주(last-prev)");
  // h1 태그로 시작해서 ul을 찾는다.
  // ul 태그 아래의 두번째 li의 텍스트를 "양평"으로 바꾼다.
  $("h1").next().next().next().find("li").eq(1).text("양평"); // ul 내부 li
  console.log($("li").next());
  //
});
