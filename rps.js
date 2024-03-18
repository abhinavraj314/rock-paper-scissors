function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const rock = document.querySelector(".rockbtn");
const paper = document.querySelector(".paperbtn");
const scissors = document.querySelector(".scissorbtn");

let playerBox = document.querySelector(".box1");
let compBox = document.querySelector(".box2");

let userCount = 0;
let cpuCount = 0;
let userCountVar = document.querySelector(".usercount");
let cpuCountVar = document.querySelector(".cpucount");
userCountVar.innerHTML = userCount;
cpuCountVar.innerHTML = cpuCount;

function play(player_choice) {
  let computer = getComputerChoice();
  playerBox.innerHTML = `<img height="140px" width="140px" src="${player_choice}.webp">`;
  compBox.innerHTML = `<img height="140px" width="140px" src="${computer}.webp">`;
  const player = player_choice.toLowerCase();
  let status = document.querySelector(".status");
  let userCountVar = document.querySelector(".usercount");
  let cpuCountVar = document.querySelector(".cpucount");
  if (player == computer) {
    userCountVar.innerHTML = userCount;
    cpuCountVar.innerHTML = cpuCount;
    status.innerHTML = "<h3 class=`status`>DRAW</h3>";
  } else if (player == "rock" && computer == "scissors") {
    status.innerHTML = "<h3 class=`status`>YOU WIN THIS ROUND!</h3>";
    userCount = userCount + 1;
    userCountVar.innerHTML = userCount;
  } else if (player == "paper" && computer == "rock") {
    status.innerHTML = "<h3 class=`status`>YOU WIN THIS ROUND!</h3>";
    userCount = userCount + 1;
    userCountVar.innerHTML = userCount;
  } else if (player == "scissors" && computer == "paper") {
    status.innerHTML = "<h3 class=`status`>YOU WIN THIS ROUND!</h3>";
    userCount = userCount + 1;
    userCountVar.innerHTML = userCount;
  } else if (player == "rock" && computer == "paper") {
    status.innerHTML = "<h3 class=`status`>YOU LOSE THIS ROUND..</h3>";
    cpuCount = cpuCount + 1;
    cpuCountVar.innerHTML = cpuCount;
  } else if (player == "paper" && computer == "scissors") {
    status.innerHTML = "<h3 class=`status`>YOU LOSE THIS ROUND..</h3>";
    cpuCount = cpuCount + 1;
    cpuCountVar.innerHTML = cpuCount;
  } else if (player == "scissors" && computer == "rock") {
    status.innerHTML = "<h3 class=`status`>YOU LOSE THIS ROUND..</h3>";
    cpuCount = cpuCount + 1;
    cpuCountVar.innerHTML = cpuCount;
  }
  if (userCount == 5) {
    status.innerHTML =
      "<h3 class=`status`>YOU WON THE GAME! Click any button to restart.</h3>";
    rock.addEventListener("click", () => location.reload());
    paper.addEventListener("click", () => location.reload());
    scissors.addEventListener("click", () => location.reload());
  } else if (cpuCount == 5) {
    status.innerHTML =
      "<h3 class=`status`>YOU LOST THE GAME.. Click any button to restart</h3>";
    rock.addEventListener("click", () => location.reload());
    paper.addEventListener("click", () => location.reload());
    scissors.addEventListener("click", () => location.reload());
  }
}

rock.addEventListener("click", function () {
  play("rock");
});
paper.addEventListener("click", function () {
  play("paper");
});
scissors.addEventListener("click", function () {
  play("scissors");
});
