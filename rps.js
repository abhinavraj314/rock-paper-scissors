function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}
let computerChoice = getComputerChoice();
function play(player_choice, computer){
    const player = player_choice.toLowerCase();
    if(player=="rock"&&computer=="rock"){
        return "draw!!!";
    }
    else if(player=="paper"&&computer=="paper"){
        return "draw!!!";
    }
    else if(player=="scissors"&&computer=="scissors"){
        return "draw!!!";
    }
    else if(player=="rock"&&computer=="scissors"){
        return "u win!!!";
    }
    else if(player=="paper"&&computer=="rock"){
        return "u win!!!";
    }
    else if(player=="scissors"&&computer=="paper"){
        return "u win!!!";
    }
    else if(player=="rock"&&computer=="paper"){
        return "u lose...";
    }
    else if(player=="paper"&&computer=="scissors"){
        return "u lose...";
    }
    else if(player=="scissors"&&computer=="rock"){
        return "u lose...";
    }
    else if(player!="rock"||"scissors"||"paper"){
        return "invalid ah value";
    }
}
const playerChoice = prompt("enter ur choice:","").toString();
console.log("u chose "+playerChoice);
let res = play(playerChoice, computerChoice);
console.log(res);
console.log("(computer chose "+computerChoice+")");