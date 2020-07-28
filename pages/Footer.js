import React from 'react'
//import { MdRefresh } from 'react-icons/md'
import style from '../styles/ticTacToe.module.css'

function Footer(props) {
  const hasWinner = props.hasWinner
  const handleRestart = props.handleRestart

  return (
    <div id={style.footer}>
      {hasWinner ? (
        <button className={style.againButton} onClick={handleRestart}>
          Play Again?
        </button>
      ) : (
        <button className={style.resetButton} onClick={handleRestart}>
          {/* <MdRefresh /> */}
          <span>Reset</span>
        </button>
      )}
    </div>
  )
}

export default Footer
