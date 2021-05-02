import React from 'react'
import Link from 'next/link'
import styles from '../styles/cards.module.css'

function CardItem({ href, src, text, label }) {
  return (
    <li className={styles.card}>
      <Link href={href}>
        <a className={styles.link}>
          <div className={styles.imageWrapper}>
            <div className={styles.label}>{label}</div>
            <img className={styles.image} alt='Travel Image' src={src} />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.text}>{text}</h3>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default CardItem
