import { useState } from 'react';
import './App.css'
import Card from './components/Card';

const cardImages = [
  {
    src: '/img/helmet-1.png',
    isMatched: false,
  },
  {
    src: '/img/potion-1.png',
    isMatched: false,
  },
  {
    src: '/img/ring-1.png',
    isMatched: false,
  },
  {
    src: '/img/scroll-1.png',
    isMatched: false,
  },
  {
    src: '/img/shield-1.png',
    isMatched: false,
  },
  {
    src: '/img/sword-1.png',
    isMatched: false,
  },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, serTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    serTurns(0)
  }
  const handleChoice = (card) => {
    if (choiceOne) {
      setChoiceTwo(card)
    } else {
      setChoiceOne(card)
    }

  }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => (<Card handleChoice={handleChoice} key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

export default App