import Deck from "./deck.js"


const playerCardSlot = document.querySelector('.player-card-slot')
const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

playerCardSlot.appendChild(deck.cards[0].getHTML())