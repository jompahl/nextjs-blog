import React from 'react'
import style from '../styles/ticTacToe.module.css'

function Header(props) {
  const { totalMoves } = props

  return (
    <React.Fragment>
      <div id={style.head}>Jompahls Tic Tac Toe</div>
      <div className={style.totalMoves}>Moves: {totalMoves} </div>
    </React.Fragment>
  )
}

export default Header
