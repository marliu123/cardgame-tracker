var playerNum = 0;
var round = 1;

function changeName(num){
    let userInput = document.querySelector("#player-" +num);
    let message = document.querySelector("#player" +num);
    document.getElementById("submitButton"+num).style.display = "none";
    message.innerHTML = userInput.value;
    document.getElementById("player-"+num).style.display = "none";
    playerNum++;
    if(playerNum == 4){
        document.getElementById("gameButton").style.display = "inline-block";
    }
    newPlayer(userInput);
}

function startGame(){
    document.getElementById("player").style.display = "none";
    document.getElementById("table1").style.display = "table";
    document.getElementById("table2").style.display = "table";
    document.getElementById("round").style.display = "block";
    playerChart(playerList);
    displayName(playerList);
    document.getElementById("playerPoints").style.display = "block";
    document.getElementById("newRound").style.display = "initial";
    document.getElementById("endGame").style.display = "initial";
}

function displayName(data){
    let player1 = document.querySelector('#player1name');
    player1.innerHTML = data[0].getName().value;
    let player2 = document.querySelector('#player2name');
    player2.innerHTML = data[1].getName().value;
    let player3 = document.querySelector('#player3name');
    player3.innerHTML = data[2].getName().value;
    let player4 = document.querySelector('#player4name');
    player4.innerHTML = data[3].getName().value;
}

