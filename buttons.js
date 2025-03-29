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

