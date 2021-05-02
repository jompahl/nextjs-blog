import React from 'react'
import CardItem from './CardItem'
import styles from '../styles/cards.module.css'

function Cards({ cards }) {
  console.log(cards)
  return (
    <div className={styles.cards}>
      <ul className={styles.cardList}>
        {cards.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </ul>
    </div>
  )
}

export default Cards
