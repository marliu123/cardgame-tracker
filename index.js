var player = 0;
function changeName(num){
    let userInput = document.querySelector("#player-" +num)
    let message = document.querySelector("#player" +num)
    document.getElementById("submitButton"+num).style.display = "none";
    message.innerHTML = userInput.value;
    document.getElementById("player-"+num).style.display = "none";
    player++;
    if(player == 4){
        document.getElementById("gameButton").style.display = "block"
    }
}