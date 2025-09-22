$().ready(function () {
  //alert("!");
  $.get("https://api.github.com/users", function (res) {
    var index = parseInt(Math.random() * 30);
    console.log(index);
    console.log(res[index]);
    var profile = $("<img>");
    profile.attr("src", res[index].avatar_url);
    profile.addClass("profile");
    $(".profile").append(profile);
    console.log(res[index].gists_url);
    console.log(res[index].login);
    $.get(res[index].repos_url, function (repos_res) {
      for (var i = 0; i < repos_res.length; i++) {
        console.log(repos_res[i].name);
        var reposBox = $("<div>");
        reposBox.append(profile.clone());
        var reposName = $("<a>");
        var href = res[index].login + "/" + repos_res[i].name;
        reposName.attr("href", "https://github.com/" + href);
        reposName.text(href);
        reposBox.addClass("repos-list");
        reposBox.append(reposName);
        $(".aside-list").append(reposBox);
      }
    });
  });
});
