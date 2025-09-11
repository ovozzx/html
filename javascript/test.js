window.onload = function () {
  var userInput = document.querySelector(".user-input");
  userInput.onkeyup = function (event) {
    userInputText.innerText = event.target.value;
  };
};
