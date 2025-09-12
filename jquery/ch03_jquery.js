$().ready(function () {
  //$("#destinations li").text("서울"); // decendent  : #의 모든 li
  $("#destinations > li").css({
    // 배경색 변경
    "background-color": "#FF0",
  });
  // 아이디가 destinations인 UL 태그의
  //    모든 li 태그들의 글자 색상을 #F00으로 변경한다. ==> "#destinations li"
  $("#destinations").find("li").css({
    color: "#F00",
  });
  // 아이디가 destinations인 UL 태그의 li child만 찾아서 (직계 자식)
  // 글자 색상을 #0FF"로 변경한다 ==> "#destinations > li"
  $("#destinations").children("li").css({
    color: "#0FF",
  });

  // 아이디가 france인 ul의 부모태그 (ul 아이디 destinations > li:nth-child(2))
  // 의 형제 태그 중 가장 마지막 태그의 텍스트를 "양평"으로 변경한다.
  $("#france").parent().next().text("양평~~~~");
  // 아이디가 france인 ul의 부모의 부모의 부모의 자식 중 h1 태그의 텍스트를 "어디로 가고싶으세요?"로 변경
  $("#france")
    .parent()
    .parent()
    .parent()
    .children("h1")
    .text("어디로 가고싶으세요?");
});
