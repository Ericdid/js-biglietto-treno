// - chiedere la distanza da percorrere
const Distance = parseInt(prompt(`Distanza Da Percorrere`));
console.log("distanza da percorrere : " + Distance + "km");

// - chiedere l età
const Userage = parseInt(prompt(`inserisci la tua età`));
console.log("età del passeggero : " + Userage);

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
const Price = 0.21;

let number = Distance * 0.21;
console.log("prezzo tratta : " + number + "€");

// - va applicato uno sconto del 20% per i minorenni
if (Userage < 18) {
}
