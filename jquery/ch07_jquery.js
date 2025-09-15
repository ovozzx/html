$().ready(function () {
  // #package-ticket-count에서 key up 이벤트가 발생하면
  // "KeyUp!" 을 콘솔로 출력한다

  $(".add-input").on("click", function () {
    var newInput = $("<input type='number' />"); // shadow dom
    newInput.addClass("new-input-number");
    newInput.on("keyup", function () {
      console.log("key up!");
    });
    $(this).after(newInput);
  });

  // shadow dom 이벤트 추가 방법
  //  $(".package").on("keyup", ".new-input-number", function () {
  // (1) 가운데 shadow dom 식별자를 추가해야 함
  // (2) shadow dom 부모를 앞에 추가 "package ticket-purchase"
  //    console.log("key up!");
  //  });

  $("#package-ticket-count")
    .on("keyup", function () {
      // 콜백 함수
      console.log("KeyUp!");
      // 티켓의 가격을 가져와 콘솔로 출력한다
      var price = $(this).closest(".package").data("price");
      console.log(price);
      // 의미 : 이벤트가 일어난 대상(this)의 인접한 부모중에 클래스명이 .package인 것!
      // 클래스명에 2개중에 한개만 주면 됨

      // #package-ticket-count에 입력한 값을 가져온다
      // document.querySelector("#package-ticket-count").value
      var count = $(this).val();
      console.log(count);

      count = parseInt(count);
      if (isNaN(count)) {
        count = 0;
      }
      $(this).val(count);

      var min = $(this).data("min");
      var max = $(this).data("max");

      if (count < min) {
        count = min;
        $(this).val(count); // setter
      }
      if (count > max) {
        count = max;
        $(this).val(count);
      }

      // price * count 한 결과를 #amount의 text로 변경한다
      var amount = price * count;
      $("#amount").text(amount);

      // class, id의 차이
      // id : 한 html 파일 내부에 단 하나만 존재하는 것
      //  - 중복이 발생하면 안됨
      // class : 한 html 파일 내부에 여러번 중복해서 존재하는 것
      // class : 이벤트의 콜백내부에서 class에게 접근할 때 --> closest, children, find
      // id : $("#...") 접근

      // keyup은 스텝퍼로는 인지 못함 => "change" 태그의 이벤트 but keyup은 안 먹음 (포커스 잃을 때 먹음)
    })
    .on("change", function () {
      // change가 일어났을 때 keyup을 발생시키면 됨 (위 동작 또 안 적어도됨)
      // #package-ticket-count의 값이 변경되었을 때
      // #package-ticket-count의 keyup 이벤트를 실행시킨다
      $(this).trigger("keyup");
    });
});
