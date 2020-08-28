let actualNumber = Math.floor(Math.random() * 100) + 1;
let alert_success = document.getElementById("alert_success");
let alert_low = document.getElementById("alert_low");
let alert_high = document.getElementById("alert_high");

window.onload = function () {
  alert_success.style.display = "none";
  alert_low.style.display = "none";
  alert_high.style.display = "none";
};

let history = [];
submit = () => {
  console.log(actualNumber);
  let yourGuess = parseInt(document.getElementById("your_guess").value);
  if (!yourGuess) {
    alert("Please enter your guess number");
    return;
  }
  history.push(yourGuess);
  generateHistory();
  if (yourGuess < actualNumber) {
    alert_success.style.display = "none";
    alert_low.style.display = "flex";
    alert_high.style.display = "none";
    if (history.length === 5) {
      alert("Oops you loose");
      restart();
    }
  } else if (yourGuess > actualNumber) {
    alert_success.style.display = "none";
    alert_low.style.display = "none";
    alert_high.style.display = "flex";
    if (history.length === 5) {
      alert("Oops you loose");
      restart();
    }
  } else if (yourGuess === actualNumber) {
    alert_success.style.display = "flex";
    alert_low.style.display = "none";
    alert_high.style.display = "none";
  }
  document.getElementById("your_guess").value = "";
};

generateHistory = () => {
  listItems = history.reduce((result, item, index) => {
    result += `<li>${index + 1}. You've guessed ${item}</li>`;
    return result;
  }, "");
  document.getElementById("result").innerHTML = listItems;
};

restart = () => {
  alert_success.style.display = "none";
  alert_low.style.display = "none";
  alert_high.style.display = "none";
  history = [];
  document.getElementById("result").innerHTML = null;
  actualNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("your_guess").value = "";
};
