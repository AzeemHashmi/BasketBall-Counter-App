let homePoints = 0;
let guestPoints = 0;

let homePointsEl = document.getElementById("homePoints");
let guestPointsEl = document.getElementById("guestPoints");
console.log(homePointsEl);

function HomePoints(x) {
  homePoints += x;
  homePointsEl.innerText = homePoints;
}

function GuestPoints(x) {
  guestPoints += x;
  guestPointsEl.innerText = guestPoints;
}

function reset() {
  homePoints = 0;
  guestPoints = 0;
  homePointsEl.innerText = 0;
  guestPointsEl.innerText = 0;
}
