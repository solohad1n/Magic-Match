import React from "react";
import './style.css'

const Card = ({ card }) => {
  return (
    <div className='card'>
      <div>
        <img className='front' src={card.src} alt='card-front' />
        <img onClick={() => handleChoice(card)} className='back' src='/img/cover.png' alt='cart-back' />
      </div>
    </div>
  )
}

export default Card 