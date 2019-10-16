function prtScn(result){
    document.getElementById("result").placeholder = result;s
    return true;
}

function play(player1){
    let arr = ["Rock", "Paper", "Scissors"];
    player2 = arr[Math.floor(Math.random() * arr.length)];

    let whoWins = "";
    if (player1 == `Rock`){
        if (player2 == `Paper`){
            whoWins = `Player 2 is the winner`;
        }
        else if (player2 == `Scissors`){
            whoWins = `Player 1 is the winner`;
        }
        else{
            whoWins = `There's a tie!`;
        }
    }
    else if (player1 == `Paper`){
        if (player2 == `Rock`){
            whoWins = `Player 1 is the winner`;
        }
        else if (player2 == `Scissors`){
            whoWins = `Player 2 is the winner`;
        }
        else{
            whoWins = `There's a tie!`;
        }
    }
    else if (player1 == `Scissors`){
        if (player2 == `Paper`){
            whoWins = `Player 1 is the winner`;
        }
        else if (player2 == `Rock`){
            whoWins = `Player 2 is the winner`;
        }
        else{
            whoWins = `There's a tie!`;
        }
    }
    else{
        whoWins = `Not a valid value`;
    }
    prtScn(whoWins);
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