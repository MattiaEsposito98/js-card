const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const p = document.createElement('p')

const button = document.getElementById('button')

function randomNumber(array, tag, appeder) {
  const number = Math.floor(Math.random() * array.length)
  tag.textContent = number
  appeder.appendChild(tag)
}

button.addEventListener('click', (() => randomNumber(numeri, p, button)))