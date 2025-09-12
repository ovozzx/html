window.onload = function () {
  var button = document.querySelector(".package-green-button");
  console.dir(button);
  var p = document.createElement("p");
  p.innerText = "From $399.99";
  p.className = "total-price";
  //button.append(p); // button에 p를 추가해라 (렌더링) => 이렇게 하면 button **자식**으로 들어감
  //button.appendChild(p); // 위와 동일
  // button의 부모를 찾아서, 그 자식으로 p 추가
  button.parentElement.append(p);
  button.remove();
};
