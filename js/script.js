
// Dichiaro le variabili
const VALORE_COSTANTE = 12;
let primoValore;
var secondoValore;


// Assegno un valore alle variabili
VALORE_COSTANTE = 12;
primoValore = 5
secondoValore = 7


// Faccio esempio con differenze di uso dei valori dichiarati e assegnati
VALORE_COSTANTE = 17 // Ricevo errore, non posso modificare il valore assegnato ad una variabile const
primoValore = 18 // Posso aggiornare un valore di una variabile let
let primoValore; // Non posso ridichiarare let nello stesso contesto
for (let primoValore; primoValore=0; primoValore++) // Posso farlo perchè dichiaro primoValore in un contesto diverso
var secondoValore; // Posso farlo perchè posso ridichiarare var anche nello stesso contesto

//Assegno valore di diverso tipo di dato alle mie variabili e visualizzo il tipo di dato in console
primoValore = 10; // Assegno un valore numerico alla mia variabile
console.log(primoValore); // Viene stampato 10
typeof primoValore; // Ottengo Number

primoValore = "Giovanni"; // Assegno un valore di tipo stringa alla mia variabile
console.log(primoValore); // Viene stampato Giovanni
typeof primoValore // Ottengo String

primoValore = false; // Assegno un valore booleano alla variabile
console.log(primoValore); // Viene stampato false
typeof primoValore; // Ottengo boolean

Number(primoValore) = "Giovanni"; // Ottengo errore di type
console.log(primoValore);
typeof primoValore;

primoValore = null;
console.log(primoValore);
typeof primoValore;



