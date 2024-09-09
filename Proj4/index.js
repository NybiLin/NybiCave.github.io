let scoreHome = document.querySelector(".score-home");
let scoreGuest = document.querySelector(".score-guest");

function incrementScoreHome(a) {
  scoreHome.textContent = Number(scoreHome.textContent) + a;
}
function incrementScoreGuest(a) {
  scoreGuest.textContent = Number(scoreGuest.textContent) + a;
}

function resetScore() {
  scoreHome.textContent = 0;
  scoreGuest.textContent = 0;
}

function goBack() {
  window.history.back();
}
