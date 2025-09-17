$().ready(function () {
  //alert("!");
  $.get("https://api.github.com/users", function (res) {
    console.log(res);
  });
});
