// const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const p = document.createElement('p')



// function randomNumber(array, tag, appeder) {
//   const number = Math.floor(Math.random() * array.length)
//   tag.textContent = number
//   appeder.appendChild(tag)
// }

// button.addEventListener('click', (() => randomNumber(numeri, p, button)))

const button = document.getElementById('button');
const cardsData = [
  { title: "Paesaggio Montano", image: "https://source.unsplash.com/200x150/?mountain", description: "Un bellissimo panorama montano." },
  { title: "Spiaggia Tropicale", image: "https://source.unsplash.com/200x150/?beach", description: "Una spiaggia rilassante e paradisiaca." },
  { title: "Foresta Incantata", image: "https://source.unsplash.com/200x150/?forest", description: "Un luogo misterioso e affascinante." },
  { title: "Tramonto sul Lago", image: "https://source.unsplash.com/200x150/?lake,sunset", description: "Un tramonto spettacolare." }
];

const cardContainer = document.createElement('ul');
document.body.appendChild(cardContainer);

function getCard(array) {
  array.forEach(element => {
    const card = document.createElement('li');

    const title = document.createElement('h3');
    title.textContent = element.title;

    const image = document.createElement('img');
    image.src = element.image;
    image.alt = element.title;

    const description = document.createElement('p');
    description.textContent = element.description;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    cardContainer.appendChild(card);
  });
}

button.addEventListener('click', () => getCard(cardsData));



