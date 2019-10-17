function prtScn(result){
    document.getElementById("result").placeholder = result;
    return true;
}

function eraseData(){
    localStorage[`win`] = 0;
    localStorage[`lose`] = 0;
    document.getElementById("victories").innerText = localStorage.getItem("win");
    document.getElementById("defeats").innerText = localStorage.getItem("lose");
    document.getElementById("result").placeholder = "";
    document.getElementById("showImage1").innerHTML = ``;
    document.getElementById("showImage2").innerHTML = ``;
    return true;
}

function showEraseButton(){
    document.getElementById("victories").innerText = localStorage.getItem("win");
    document.getElementById("erase").innerHTML = `<button onclick="eraseData()" id="button" class="btn btn-lg btn-outline-dark text-uppercase font-weight-light rounded-0">Erase Data</button>`;
    return true;
}

function player1Wins(){
    prtScn(`You got lucky!`);
    localStorage[`win`] = parseInt(localStorage.getItem("win"))+1;
    showEraseButton();
    return true;
}

function player2Wins(){
    prtScn(`You are a loser`); 
    localStorage[`lose`] = parseInt(localStorage.getItem("lose"))+1;
    document.getElementById("defeats").innerText = localStorage.getItem("lose");
    showEraseButton();
    return true;
}

function tie(){
    prtScn(`Oh, it's a tie`); 
    return true;
}

function showImages(image1, image2){
    document.getElementById("showImage1").innerHTML = `<img src="${image1}.png">`;
    document.getElementById("showImage2").innerHTML = `<img src="${image2}.png">`;
    return true;
}

function play(player1){
    let arr = ["Rock", "Paper", "Scissors"];
    let player2 = arr[Math.floor(Math.random() * arr.length)];
    
    showImages(player1, player2);

    if (player1 == `Rock`){
        if (player2 == `Paper`){
            player2Wins();
        }
        else if (player2 == `Scissors`){
            player1Wins();
        }
        else{
            tie();
        }
    }
    else if (player1 == `Paper`){
        if (player2 == `Rock`){
            player1Wins();
        }
        else if (player2 == `Scissors`){
            player2Wins();
        }
        else{
            tie();
        }
    }
    else if (player1 == `Scissors`){
        if (player2 == `Paper`){
            player1Wins();
        }
        else if (player2 == `Rock`){
            player2Wins();
        }
        else{
            tie();
        }
    }
    return true;
}

function setPlayer1Rock(){
    let player1Rock = `Rock`;
    play (player1Rock);
    return true;
}

function setPlayer1Paper(){
    let player1Paper = `Paper`;
    play (player1Paper);
    return true;
}

function setPlayer1Scissors(){
    let player1Scissors = `Scissors`;
    play (player1Scissors);
    return true;
}

function main(){
    localStorage.setItem("win", 0);
    localStorage.setItem("lose", 0);
    document.getElementById("victories").innerText = localStorage.getItem("win");
    document.getElementById("defeats").innerText = localStorage.getItem("lose");
}

window.onload = main();


/*

Crearemos una aplicación web que nos va a permitir jugar a Piedra, Papel o Tijeras contra la máquina!!

La web constará de:
3 botones con las opciones "Piedra", "Papel" y "Tijeras". 
Cuando el usuario haga click en alguno de estos botones, 
se guardará la jugada del jugador en una variable, 
y se generará aleatoriamente la jugada de la máquina, que se guardará en otra variable. 

Con la función de árbitro que hicisteis ayer, 
compararéis la jugada del jugador con la jugada de la máquina. 
El resultado de la partida se imprimirá en la pantalla. 

También haremos un contador de victorias. En las cookies se le pondrá al usuario 
un contador de victorias, que comenzará en cero. 
Cada vez que el usuario gane una partida, se incrementará en 1 el valor de esta cookie. 
También tendrá un contador de derrotas guardado en las cookies. Cada vez que el usuario pierda, 
se incrementará en uno el valor de esta cookie.

Encima de los 3 botones pondremos los contadores de victorias y de derrotas. 

*IMPORTANTE* Crear un repo de git solamente para este proyecto,
a parte de los otros repos de git que tenéis.


*/