$().ready(function () {
  //   alert("ready");
  var p = $("<p>"); // p 태그 만드는 방법
  p.addClass("total-price");
  p.text("From $399.99");
  console.log(p);
  //   $(".package-green-button").append(p); 바닐라 스크립트와 동일
  $(".package-green-button").after(p);
  $(".package-green-button").remove();

  var addButton = document.querySelector(".add-license");
  addButton.onclick = function () {
    // alert("ready");
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
    // $(".add-license").after(licenseBox); // 위로 추가됨 (내생각 : .add-license의 바로 뒤에 붙여서)
    $(".package-button-area").append(licenseBox); // 밑으로 추가됨
    //addButton.after(licenseBox);
  };
});
