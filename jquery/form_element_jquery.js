$().ready(function () {
  // #jobs의 선택된 값을 콘솔로 출력
  var selectedValue = $("#jobs").val(); // 선택되어있는 것을 가져온다! 처음에 "학생" 2 나옴
  console.log(selectedValue);
  // #jobs를 "교수"로 선택한다
  $("#jobs").val(3);
  console.log($("#jobs").val());
  // input은 그냥 선택 안됨
  // type이 radio이고 name이 age인 input 태그 중
  // 선택된 값만 가져와 콘솔로 출력 (이미 선택)
  var checkedAge = $("input[type='radio'][name='age']:checked").val();
  console.log(checkedAge);
  // type이 radio이고 name이 age인 input 태그 중 하나를 선택하면
  // 선택한 값을 가져와 콘솔로 출력 (나중 선택)
  $("input[type='radio'][name='age']").on("change", function () {
    // 선택한 값을 기반으로 다른 처리할 때 사용
    var checkedAge = $(this).val();
    console.log(checkedAge);
  });

  // type이 checkbox이고 name이 favorite-genre인 태그 중 선택된 값만 가져와 콘솔로 출력
  var checkedGenre = $(
    "input[type='checkbox'][name='favorate-genre']:checked"
  ).val(); // 선택된 것 중에 1개만 나옴 => 다 보려면 each 함수 쓰면 됨
  console.log(checkedGenre);

  // 펑크와 알앤비 체크박스를 강제로 체크한다
  $("#punk").prop("checked", true); // prop -> 강제로 체크 (true), 해제 (false)
  $("#rnb").prop("checked", true);

  // 락 체크박스는 강제로 체크 해제한다
  $("#rock").prop("checked", false);

  // 전체 선택 제외한 모든 것이 선택되었으면, "전체 선택" 선택
  // 한개라도 해제 하면 "전체 선택" 해제
  $("input[type='checkbox'][name='favorate-genre']").on("change", function () {
    console.log("checked", $(this).val());
    var uncheckedLength = $(
      "input[type='checkbox'][name='favorate-genre']:not(:checked)" // 체크되지 않은 것들의 수
    ).length;
    console.log(uncheckedLength);

    $("#checked-all").prop("checked", uncheckedLength === 0); // 아래 코드를 한 줄로
    // if (uncheckedLength === 0) {
    //   // 전부 선택
    //   $("#checked-all").prop("checked", true);
    // } else {
    //   $("#checked-all").prop("checked", false);
    // }
  });
  $("#checked-all").on("change", function () {
    console.log($(this).prop("checked")); // 선택 유무를 알 수 있음(true/false)

    $("input[type='checkbox'][name='favorate-genre']").prop(
      "checked",
      $(this).prop("checked") // t or f 이냐에 따라 선택
    );
  });
});
