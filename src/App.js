import { useState } from 'react';
import './App.css'
import Card from './components/Card';

const cardImages = [
  {
    src: '/img/helmet-1png',
  },
  {
    src: '/img/potion-1png',
  },
  {
    src: '/img/ring-1png',
  },
  {
    src: '/img/scroll-1png',
  },
  {
    src: '/img/shield-1png',
  },
  {
    src: '/img/sword-1png',
  },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0)
    console.log(shuffledCards)
  }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => {
          return (
            <div className='card'>
              <div>
                {cards.map((card) => <Card key={card.id} card={card} />)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App