$().ready(function () {
  $(".package-green-button").on("click", function () {
    var price = $(this).closest(".package").data("price");

    var p = $("<p>");
    p.addClass("total-price");
    p.text("From $ " + price);
    $(this).closest(".package").append(p);
    $(".package-green-button").remove();
  });

  $(".add-license").on("click", function (event) {
    // var pTag = $("<p>");
    // pTag.text("$ 29999");
    // $(".package-green-button").after(pTag);
    // $(".package-green-button").remove();
    // 클릭한 것만 변경하는 법 event.target
    // console.log(event.target);
    // $(event.target).after(pTag);
    // $(event.target).remove();
    // $(this).after(pTag);
    // $(this).remove();
    console.log(this);

    var licenseBox = $("<div>");
    licenseBox.css({
      padding: "10px",
      display: "flex",
    });
    var input1 = $("<input type='text'/>");
    input1.css({
      flexGrow: 1,
      padding: "10px",
    });
    var input2 = $("<input type='text'/>");
    input2.css({
      flexBasis: "100px",
      padding: "10px",
    });
    var input3 = $("<input type='text'/>");
    input3.css({
      flexBasis: "100px",
      padding: "10px",
    });
    licenseBox.append(input1);
    licenseBox.append(input2);
    licenseBox.append(input3);

    $(this).append(licenseBox);
  });

  $(".package-title").on("click", function () {
    // 문제 (1)
    // 클래스가 package-title인 것을 클릭하면
    // 형제 태그 중 클래스가 package-deal 인 태그의
    // 자식 태그 중 클래스가 package-deal-comment-title인 것의 텍스트를 콘솔로 출력
    // 형제 태그중에 특정 클래스명 가져와라 없음 (부모가 하는 것)
    // console.log($(this).next().children().first().text());
    // console.log($(this).next().children()); // 여러개 들어있음
    // next 쓰면 안됨 -> html 구조가 바뀔 수 있음 => 부모를 찾아가야 함
    var title = $(this)
      .closest(".package")
      .children(".package-deal")
      .children(".package-deal-comment-title")
      .text();
    console.log(title);
  });

  $(".package-deal-comment").on("click", function () {
    // 문제 (2)
    // 클래스가 package-deal-comment인 것 중 하나를 클릭하면
    // 클릭한 여행의 package-title을 콘솔로 출력한다.
    // (1)
    //console.log($(this).parent().parent().children().first().text());
    // (2)
    // console.log($(this).parent().parent().children(".package-title").text());
    // (3)
    // console.log($(this).parent().parent().children().eq(0).text());
    console.log($(this).closest(".package").children(".package-title").text());
  });
});
