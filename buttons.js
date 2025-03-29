const button2 = document.createElement('button')
const body = document.getElementsByTagName('body')[0]
button2.textContent = 'Premi per la magia'
body.appendChild(button2)
const p = document.createElement('p')

function paragraph(tag, appender) {
  tag.textContent = 'Hai cliccato il bottone'
  tag.style.color = 'red'
  return appender.appendChild(tag)
}

button2.addEventListener('click', (() => paragraph(p, button2)))

// Somma dell'array
const numeri = [10, 20, 30, 40];
let somma = 0
numeri.forEach(numero => {
  somma += numero
})

console.log(somma)

// Mettere per ogni elemento dell'array, mettere prima lettera maisucola
const nomi = ["mattia", "luca", "anna", "giulia"];
for (let i = 0; i < nomi.length; i++) {

  nomi[i] = nomi[i].charAt(0).toUpperCase() + nomi[i].slice(1).toLowerCase();

}
console.log(nomi)

// Stampare le propretà dell'oggetto:
const persona = {
  nome: "Mattia",
  età: 30,
  città: "Casalnuovo di Napoli"
};

for (const key in persona) {
  console.log(key + ": " + persona[key])
}

// Stampa i numeri pari
const numeri2 = [1, 2, 3, 4, 5, 6, 7, 8];

numeri2.forEach(numero => {
  if (numero % 2 == 0) {
    console.log(numero)
  }
})

// Creare un array con lunghezze delle stringhe

const parole = ["JavaScript", "HTML", "CSS", "React"];

const lunghezzaParole = parole.map(parola => parola.length)
console.log(lunghezzaParole)