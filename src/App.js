import { useState } from 'react';
import './App.css'

const cardImages = [
  {
    src: '/img/helmet-1png',
    isMatched: false,
  },
  {
    src: '/img/potion-1png',
    isMatched: false,
  },
  {
    src: '/img/ring-1png',
    isMatched: false,
  },
  {
    src: '/img/scroll-1png',
    isMatched: false,
  },
  {
    src: '/img/shield-1png',
    isMatched: false,
  },
  {
    src: '/img/sword-1png',
    isMatched: false,
  },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0)
  }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffledCards}>New Game</button>
    </div>
  );
}

export default App