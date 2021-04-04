import React from 'react'
import CardItem from './CardItem'
import styles from '../styles/cards.module.css'

function Cards() {
  return (
    // <div className={styles.cards}>
    //   <h1>Check this out</h1>
    //   <div className={styles.cardsContainer}>
    //     <div className={styles.cardsWrapper}>
    //       <ul className={styles.cardsItems}>
    //         <CardItem href={href} imgSrc='/images/kenya.jpeg' />
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className={styles.cards}>
      <h1>Check out these EPIC Destinations!</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <ul className={styles.cardsItems}>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              href='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              href='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
