window.onload = function () {
  var userInput = document.querySelector(".user-input");
  var userInputText = document.querySelector(".user-input-text");
  userInput.onkeyup = function (event) {
    userInputText.innerText = event.target.value;
  };
};
