/**
* Scrivere qui il codice dell'esercizio 2 del capitolo 4 di eloquentJS
* Vi ricordo che le funzioni DEVONO ESSERE PURE e implementate una in modo IMPERATIVO e una in modo DICHIARATIVO
**/
let array = [1,2,3,4,5,6];

let arrayR = [...array].reverse();

function reverseImperativo (array){
    let arrayI= [];
    for (let i=array.length -1 ; i >= 0 ; i--) {
    arrayI.push(array[i]);
    }
return arrayI;
}

console.log(array);
console.log(reverseImperativo (array));
console.log(arrayR);
