$().ready(function () {
  // 테마별로 해당하는 url을 가져와야 함 => html class에 변수를 달자
  const settings = {
    async: true,
    crossDomain: true,
    url: "", // 요소 data-filter에 있는 url를 사용해라
    method: "GET",
    headers: {
      accept: "application/json", //받을 형태
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2MwYzQ2YjdmZDYxODFiMTJhNWQ4OWQyYTQwYzBhOCIsIm5iZiI6MTY3Nzg4NjE5OS41MjEsInN1YiI6IjY0MDI4MmY3Njk5ZmI3MDBlNmZmMDE2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBH_IVWue-P47P_uquwyO3lmeCaJxdhEdhVXZBWq10c",
    },
  };

  settings.url = $(".special-program").data("filter");
  $.ajax(settings).done((res) => {
    // res가 응답 결과 (json)
    //console.log(res);
    var results = res.results;
    console.log(results);
    // 랜덤 1개
    var randomIndex = parseInt(Math.random() * results.length);
    console.log(randomIndex); // 0 ~ 19
    var randomProgram = results[randomIndex];
    console.log(randomProgram);
    var imagePath =
      "	https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/" +
      randomProgram.backdrop_path;
    var image = $("<img />");
    image.attr("src", imagePath); // 속성을 동적으로 줌
    $(".special-program").append(image);
    $(".special-program").children(".title").text(randomProgram.name);
  });

  // 코드 반복을 피함
  $(".program-list").each(function () {
    // .program-list 만큼 반복
    // 반복 함수 : 반복할 때마다 실행할 함수를 넣어줌
    // $(this); // 반복 대상 this로 가져옴
    settings.url = $(this).data("filter");
    var view = $(this).data("view");

    $.ajax(settings).done((res) => {
      // res가 응답 결과 (json)
      //console.log(res);
      var results = res.results;
      for (var i = 0; i < results.length; i++) {
        // 템플릿 무엇을 갖고올 것인지
        var templateId = "#poster-list-item-template";
        if (view == "ranking") {
          templateId = "#ranking-list-item-template";
        }
        var template = $(templateId).html();
        template = template
          .replace("#poster-path#", results[i].poster_path)
          .replace("#rank#", i + 1)
          .replace("#program-id#", results[i].id);

        var poster = $(template);
        poster.on("click", function () {
          window.location.href = "details.html?id=" + $(this).data("id"); // ? (쿼리 스트링 파라미터) : 함께 가져갈 값
          //   alert($(this).data("id"));
        });
        $(this).children(".poster-list").append(poster); // 붙여넣는곳만 다르게
      }
    });
  });

  //   $.ajax(settings).done((res) => {
  //     // res가 응답 결과 (json)
  //     //console.log(res);
  //     var results = res.results;
  //     for (var i = 0; i < results.length; i++) {
  //       var template = $("#poster-list-item-template").html();
  //       template = template.replace("#poster-path#", results[i].poster_path);
  //       var poster = $(template);
  //       $(".cook-program").children(".poster-list").append(poster); // 붙여넣는곳만 다르게
  //     }
  //   });
});
