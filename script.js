function startCountdown() {
  const items = document.querySelectorAll(".auction-item");

  items.forEach((item) => {
    const endTime = new Date(item.getAttribute("data-end-time"));
    const countdownElement = item.querySelector(".countdown");

    const timerInterval = setInterval(() => {
      const now = new Date();
      const timeRemaining = endTime - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        clearInterval(timerInterval);
        countdownElement.innerHTML = "Auction Ended";
      }
    }, 1000);
  });
}

window.onload = startCountdown;

let antBid = 35000;
let shivaBid = 40000;
let cricBid = 15000;
let khuBid = 15000;

function bidAnt() {
  const bidAmount = Number(prompt("Enter your bid:"));
  if (bidAmount > antBid) {
    updateBid(ant, antBid);
    antBid = bidAmount;
    document.getElementById("ant").innerHTML = `Current Bid: Rs.${antBid}`;
  } else {
    alert("Your bid must be higher than the current bid.");
  }
}

function bidShiva() {
  const bidAmount = Number(prompt("Enter your bid:"));
  if (bidAmount > shivaBid) {
    shivaBid = bidAmount;
    document.getElementById("shiva").innerHTML = `Current Bid: Rs.${shivaBid}`;
  } else {
    alert("Your bid must be higher than the current bid.");
  }
}

function bidCric() {
  const bidAmount = Number(prompt("Enter your bid:"));
  if (bidAmount > cricBid) {
    cricBid = bidAmount;
    document.getElementById("cric").innerHTML = `Current Bid: Rs.${cricBid}`;
  } else {
    alert("Your bid must be higher than the current bid.");
  }
}

function bidKhu() {
  const bidAmount = Number(prompt("Enter your bid:"));
  if (bidAmount > khuBid) {
    khuBid = bidAmount;
    document.getElementById("khu").innerHTML = `Current Bid: Rs.${khuBid}`;
  } else {
    alert("Your bid must be higher than the current bid.");
  }
}
function updateBid(ant, antBid) {
  localStorage.setItem(ant, antBid);
  document.getElementById("ant").innerHTML = `Current Bid: Rs.${antBid}`;
}
