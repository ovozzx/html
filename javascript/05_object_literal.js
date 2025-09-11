// window.onload = function () {};

var user = {
  id: "user01",
  password: "user-password",
  grade: "begginer",
  authorization: ["article-list", "article-read", "reply-write"],
  address: {
    city: " 인천",
    street: "계산로",
    apt: "301동 103호",
  },
  email: "takiwow@naver.com",
  name: "회원01",
  birthDate: "1996-07-04",
  printUserInfo: function () {
    console.log("이름 : " + name);
    console.log("email : " + email);
    console.log("주소 : " + this.address.city + this.address.street);
  },
}; // 객체 생성

user.nickname = "당근";
console.log(user);
console.log(user.name);
console.log(user.address.city);
console.log(user.authorization[0]);
