// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
// Ogni cella ha un numero progressivo, da 1 a 100. 
// Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// 1.Creare un collegamento col bottone "Play"
// 2.Generare una griglia 10x10 collegata la bottone "Play"
// 3."Numerare" ogni cella
// 3.Al click di una cella, essa si colora di azzurro, resituendo il numero di cella in console

let play_button = document.getElementById('play-button');

play_button.addEventListener('click', function(){
    const container = document.querySelector('div.c-square');
    for(let i=1; i<=100; i++){
        let square;
        square=`<div class="sq-red"></div>`;
        console.log(square);
        container.innerHTML += square;
    }
})



