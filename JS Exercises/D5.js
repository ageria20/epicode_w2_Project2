/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.   
*/
console.log("--------------------Esercizio 1--------------------");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets". 
*/
console.log("--------------------Esercizio 2--------------------");
console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito. 
*/
console.log("--------------------Esercizio 3--------------------");
// console.log(pets.reverse());
// è possibile anche farlo cn un ciclo for
for (let i = pets.length - 1; i >= 0; i--) {
  let elementReverse = pets[i];
  console.log(elementReverse);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione. 
*/
console.log("--------------------Esercizio 4--------------------");
let firstElement = pets[0];
pets.shift(firstElement);
pets.push(firstElement);
console.log(pets);
// 'cat' era il primo elemeto dopo aver riordinato l'array in ordine alfabetico e quindi il precedente codice ci restituirà il nuovo array con la stringa 'cat' in ultima posizione

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta. 
*/
console.log("--------------------Esercizio 5--------------------");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  element.licensePlate = "AG304FS";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto. 
*/
console.log("--------------------Esercizio 6--------------------");
cars.push({
  brand: "Audi",
  model: "Q8",
  color: "olive-green",
  trims: ["rs-line", "matt"],
});
// console.log(cars);
for (let i = 0; i < cars.length; i++) {
  const obj = cars[i];
  const arrProp = obj.trims;
  arrProp.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("--------------------Esercizio 7--------------------");
const justTrims = [];
console.log(cars[0].trims.length);
for (let i = 0; i < cars.length; i++) {
  const obj = cars[i];
  justTrims.push(obj.trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("--------------------Esercizio 8--------------------");
for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  if (element.color.charAt(0) === "b") console.log("Fizz");
  else console.log("Buzz");
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("--------------------Esercizio 9--------------------");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let index = 0;
while (index < numericArray.length) {
  index++;
  const element = numericArray[index];
  const stop = numericArray[index - 1];
  if (element !== 32) console.log(element);
  else break;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("--------------------Esercizio 10--------------------");
const charactersArray = ["g", "n", "u", "z", "d"];
const lettersToNums = [];
for (let i = 0; i < charactersArray.length; i++) {
  const letter = charactersArray[i];
  switch (letter) {
    case "a":
      lettersToNums.push(1);
      break;
    case "b":
      lettersToNums.push(2);
      break;
    case "c":
      lettersToNums.push(3);
      break;
    case "d":
      lettersToNums.push(4);
      break;
    case "e":
      lettersToNums.push(5);
      break;
    case "f":
      lettersToNums.push(6);
      break;
    case "g":
      lettersToNums.push(7);
      break;
    case "h":
      lettersToNums.push(8);
      break;
    case "i":
      lettersToNums.push(9);
      break;
    case "l":
      lettersToNums.push(10);
      break;
    case "m":
      lettersToNums.push(11);
      break;
    case "n":
      lettersToNums.push(12);
      break;
    case "o":
      lettersToNums.push(13);
      break;
    case "p":
      lettersToNums.push(14);
      break;
    case "q":
      lettersToNums.push(15);
      break;
    case "r":
      lettersToNums.push(16);
      break;
    case "s":
      lettersToNums.push(17);
      break;
    case "t":
      lettersToNums.push(18);
      break;
    case "u":
      lettersToNums.push(19);
      break;
    case "v":
      lettersToNums.push(20);
      break;
    case "z":
      lettersToNums.push(21);
      break;
    default:
      break;
  }
}
console.log(lettersToNums);
