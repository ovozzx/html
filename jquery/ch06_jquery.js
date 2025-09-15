$().ready(function () {
  $(".vacation-title")
    .children("img")
    .on("mouseenter", function (event) {
      //   console.log("mouse enter");
      //  .ticket이 보이도록 한다
      console.log(event);

      $(".ticket").css({
        top: event.pageY + 5 + "px", // 방해 방지를 위해 5씩 더 추가
        left: event.pageX + 5 + "px",
      });

      $(".ticket").show(); // block으로 바뀜 (css를 통해서 inline-block으로 바꿔야 함)
    })
    .on("mousemove", function (event) {
      // 툴팁
      //   console.log("mouse leave");
      //  .ticket이 보이지 않도록 한다
      $(".ticket").css({
        top: event.pageY + 5 + "px", // 방해 방지를 위해 5씩 더 추가
        left: event.pageX + 5 + "px",
      });

      $(".ticket").show();
    })
    .on("mouseleave", function (event) {
      //   console.log("mouse leave");
      //  .ticket이 보이지 않도록 한다

      $(".ticket").hide();
    });
});
