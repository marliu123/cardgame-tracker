class Player{ 
    constructor(name, totalScore){
        this.name = name;
        this.totalScore= totalScore;
    }

    getName(){
        return this.name
    }

    setName(newName){
        newName = newName.trim();
        this.name = newName;
    }

    getTotalScore(){
        return this.totalScore;
    }

    setTotalScore(score){
        this.totalScore = score;
    }
}
var winnerPoints = 0;
var winnerNum = 0;

const playerList = [];

function newPlayer(name){
    let player = new Player(name, 0);
    playerList.push(player);
}

function playerChart(data){
    var table = document.getElementById('playerTable');
    for(var i = 0; i < data.length; i++){
    var row = `<tr>
                    <td>${data[i].getName().value}</td>
                    <td>${data[i].getTotalScore()}</td>
                </tr>`
    table.innerHTML += row;
    }
}

function updateChart(){
    round++;
    playerList[winnerNum].setTotalScore(playerList[winnerNum].getTotalScore() + winnerPoints);
    var table = document.getElementById('playerTable');
    for(var i = 0; i < playerList.length; i++){
        table.rows[i].cells[1].innerHTML = playerList[i].getTotalScore();
    }
    winnerPoints = 0;
    winnerNum = 0;
    for(var j = 1; j < playerList.length+1; j++){
        document.getElementById("player"+j+"-points").value = '';
        document.getElementById("points"+j).style.display = "initial";
    }
    document.getElementById("round").innerHTML = "ROUND " + round;
}

function addPoints(num){
    let points = Math.abs(document.querySelector("#player"+num+"-points").value);
    if(points == 0){
        winnerNum = num - 1;
    }
    if(points > 0 && points < 6){
        playerList[num-1].setTotalScore(playerList[num-1].getTotalScore()-(points * 1));  
        winnerPoints += points * 1;
    } else if(points >= 6 && points < 10){
        playerList[num-1].setTotalScore(playerList[num-1].getTotalScore()-(points * 2));
        winnerPoints += points * 2;
    } else if(points >= 10 && points < 12){
        playerList[num-1].setTotalScore(playerList[num-1].getTotalScore()-(points * 3));
        winnerPoints += points * 3;
    } else if (points == 13){
        playerList[num-1].setTotalScore(playerList[num-1].getTotalScore()-(points * 4));
        winnerPoints += points * 4;
    }
    document.getElementById("points"+num).style.display = "none";
}

