$().ready(function () {
  // search("?id=157239")에 해당하는 것을 가져와서 split하고 배열로 받음
  var parameter = window.location.search;
  var programId = parameter.split("=")[1];
  //   alert(programId);

  const settings = {
    async: true,
    crossDomain: true,
    url: "https://api.themoviedb.org/3/discover/tv?air_date.gte=2025-09-16&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc", // 요소 data-filter에 있는 url를 사용해라
    method: "GET",
    headers: {
      accept: "application/json", //받을 형태
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2MwYzQ2YjdmZDYxODFiMTJhNWQ4OWQyYTQwYzBhOCIsIm5iZiI6MTY3Nzg4NjE5OS41MjEsInN1YiI6IjY0MDI4MmY3Njk5ZmI3MDBlNmZmMDE2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBH_IVWue-P47P_uquwyO3lmeCaJxdhEdhVXZBWq10c",
    },
  };

  $.ajax(settings).done((res) => {
    // res가 응답 결과 (json)
    //console.log(res);
    // id 조회가 안되니 아무거나 불러와서 보여주기
    var results = res.results;
    console.log(results);
    // 랜덤 1개
    var randomIndex = parseInt(Math.random() * results.length);
    console.log(randomIndex); // 0 ~ 19
    var randomProgram = results[randomIndex];
    console.log(randomProgram);
    var backgroundImagePath =
      "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/" +
      randomProgram.backdrop_path;
    var backgroundImage = $(".background-image");
    backgroundImage.attr("src", backgroundImagePath);
    var mainImage = $(".main-image");
    var imagePath =
      "https://image.tmdb.org/t/p/w220_and_h330_face/" +
      randomProgram.poster_path;
    mainImage.attr("src", imagePath);
    var title = $(".title");
    title.text(randomProgram.name);
    $(".details-main").append(title);
    //$(".special-program").children(".title").text(randomProgram.name);
    var overview = $(".overview");
    overview.text(randomProgram.overview);
    var playButton = $(".playbutton");
    playButton.attr(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ73ZXKxVdXTH2IQuWdiCbJaoQSogOuP7FPw&s"
    );
  });
});
