console.log('ciaoo');


//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let utente = prompt('Inserire una parola')
console.log(utente);
let message;

function verification_word(utente) {

   
    let palindrome_word = utente.split("").reverse().join("");
    
    if (palindrome_word == utente) {
        return true 
    }

    return false; 
};

let palindrome_word = verification_word(utente);

if (palindrome_word) {
    message = "La parola è palindroma"

} else { 
    message = "La parola non è palindroma"
}

alert(message);


//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
let pari_dispari = prompt('scegli pari o dispari');

let player = Number(prompt('Inserisci un numero da 1 a 5:'));

let pc_player = Math.floor((Math.random() * 5) + 1);

let number = sum(player, pc_player)

function even_odd(e){
    if (e%2 == 0){
        return true
    }

    return false
}

function sum(x,y){
    return Number(x+y)
}

function calculator_win(e, number){
  let dado = even_odd(e);
  if (player == 'pari')
  

}


document.writeln(calculator_win(even_odd, number))







//Consigli del giorno
//Scriviamo sempre in italiano i passaggi che vogliamo fare
//Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
//Domande da farsi quando si crea una funzione:
//Come dovrebbe chiamarsi?
//Ho bisogno di parametri?
//Devo restituire un valore?
//Se sì, di che tipo?