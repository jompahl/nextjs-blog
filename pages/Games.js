import React, { Component } from 'react'
import TicTacToe from './TicTacToe'
import { Button, TextInputField, Pane, SelectField } from 'evergreen-ui'
import Cards from '../components/Cards'

class Games extends Component {
  render() {
    return (
      <Cards
        cards={[
          {
            src: '/images/mastermind.png',
            text: 'Mastermind',
            label: 'Strategy',
            href: '/SettingsGrabberMind',
          },
          {
            src: '/images/tictactoe2.png',
            text: 'Tic Tac Toe',
            label: 'Strategy',
            href: '/Settings',
          },
          {
            src: '/images/guessIt.png',
            text: 'GuessIt',
            label: 'Questions',
            href: '/SettingsGuessIt',
          },
        ]}
      ></Cards>
    )
  }
}

export default Games
