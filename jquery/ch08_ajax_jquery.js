// ready 바깥에 써줘야 함 & document 생략하면 안 됨
$(document).on("ajaxStart", function () {
  $(".spinner").show();
});

$(document).on("ajaxComplete", function () {
  $(".spinner").hide();
});

$().ready(function () {
  $(".load-comments").on("click", function () {
    $.get("https://jsonplaceholder.typicode.com/comments", function (comments) {
      $(".posts").html("");

      for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        var template = $("#comment-item-template").html();
        console.log(template);
        template = template
          .replace("#name#", comment.name) // html을 문자열로 받아서 교체함
          .replace("#email#", comment.email)
          .replace("#body#", comment.body);
        var listItem = $(template);
        $(".comments").append(listItem);
        // var listItem = $("<li>");
        // listItem.text(comment.body);
        // $(".comments").append(listItem);
      }
    });
  });
  $(".load-git-users").on("click", function () {
    // git api 호출
    $.get("https://jsonplaceholder.typicode.com/posts", function (users) {
      $(".posts").html(""); // 내부 내용을 다 지워라 (계속 눌러도 스크롤 안 늘어남)
      //$.get() ==> JSON(text) => Object Literal ==> JSON (text)
      // jquery 버전이 올라가면서 자동화 시켜서, 원래 json으로 나와야 하지만 Object 객체로 나옴
      // console.log(users);
      //   $(".git-users").text(JSON.stringify(users)); // 객체 리터럴을 json으로 다시 변환
      //console.log(users); // json이 객체화되어 출력됨 by jquery
      // !! 배열
      for (var i = 0; i < users.length; i++) {
        //console.log(users[i]);
        var post = users[i];
        // 더 간단한 방법
        var template = $("#post-item-template").html(); // 템플릿에 대한 html을 가져와라
        console.log(template);
        template = template
          .replace("#data-id#", post.userId)
          .replace("#id#", post.id)
          .replace("#title#", post.title)
          .replace("#body#", post.body);
        var listItem = $(template);
        // title 클릭하면 body 나오게
        listItem.children(".title").on("click", function () {
          $(this).closest("li").children(".body").slideToggle(); // 올라갔다 내려갔다
        });

        // 긴 방법
        // var listItem = $("<li>"); // element 생성
        // listItem.data("user-id", post.userId); // user-id에 post.userId 데이터를 넣어주겠다
        // listItem.data("id", post.id);

        // var title = $("<div>");
        // title.addClass("title");
        // title.text(post.title);
        // listItem.append(title);

        // var body = $("<div>");
        // body.addClass("body");
        // body.text(post.body);
        // listItem.append(body);

        $(".posts").append(listItem);
      }
    });
    // 데이터 요청 (비동기)
    // users는 파라미터에 json 결과(배열)가 들어옴
    // 한도는 다음날 풀림
  });
});
