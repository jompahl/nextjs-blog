import React from 'react'
//import Link from 'react-router-dom'
import Link from 'next/link'
import styles from '../styles/cards.module.css'

function CardItem({ props }) {
  return (
    // <li className={styles.cardsItems}>
    //   <Link href={href} className={styles.cardItemLink}>
    //     <a>
    //       <figure className={styles.cardItemPicWrap}>
    //         <img src={imgSrc} alt='image' className={styles.cardsItemImg} />
    //       </figure>
    //       <div className={styles.cardsItemInfo}>
    //         <h5 className={styles.cardsItemTest}></h5>
    //       </div>
    //     </a>
    //   </Link>
    // </li>
    <>
      <li className={styles.cardsItems}>
        <Link className={styles.cardItemLink} href='/'>
          <figure
            className={styles.cardItemPicWrap}
            data-category={props.label}
          >
            <img
              className={styles.cardsItemImg}
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className={styles.cardsItemInfo}>
            <h5 className={styles.cardsItemTest}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
