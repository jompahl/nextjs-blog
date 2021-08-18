import React, { Component } from 'react'
import { questions } from '../lib/GuessItQuestions'
import { Question } from '../lib/Question'
import mind from '../styles/grabberMind.module.css'
import { Point } from './Point'
//import { Pane, Button, Dialog, Icon, InfoSignIcon, Tooltip, toaster, defaultTheme } from 'evergreen-ui'
//import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const questions1 = questions[0]

class GuessIt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nbrOfPlayers: this.props.nbrOfPlayers,
      players: this.props.players,
      points: this.props.points,
      showDialog: false,
      answer: '',
      turn: this.props.players[0],
      answerCorrect: false,
    }
  }

  handleCorrectAnswer() {
    console.log('svarade rätt')
    this.setState({ answerCorrect: true, showDialog: false })
  }
  handleWrongAnswer() {
    console.log('svarade fel')
  }
  handleBanking() {
    console.log('bankat')
  }

  handleAnswer = (answer) => {
    this.setState({ showDialog: true, answer: answer })
    //this.DefaultDialogExample();
    //this.submit();
    //confirm();
    // alert("the answer is " + answer + "was your answer correct?");
  }

  render() {
    const {
      nbrOfPlayers,
      players,
      points,
      showDialog,
      answer,
      turn,
      answerCorrect,
    } = this.state
    console.log(answerCorrect + players[0])
    console.log(players)
    return (
      <div>
        <Question
          question={questions1.question}
          guess={questions1.guess}
          handleAnswer={this.handleAnswer}
        ></Question>

        <div
          className={mind.dialog}
          style={{ visibility: showDialog ? 'visible' : 'hidden' }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '300px',
              height: '200px',
              border: '3px solid',
              background: 'red',
            }}
          >
            <h4>Was your answer {answer}?</h4>
            <button
              onClick={() => {
                this.handleCorrectAnswer()
                //this.setState({ showDialog: false })
              }}
              style={{ width: '70px', height: '50px', background: 'green' }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                this.handleWrongAnswer()
                this.setState({ showDialog: false })
              }}
              style={{ width: '70px', height: '50px', background: 'red' }}
            >
              No
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          Turn: {turn}
          <button>Bank points</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {players.map((player, index) => (
            <Point
              playerName={player}
              point={answerCorrect && player == turn ? 1 : 0}
            ></Point>
          ))}
        </div>
      </div>
    )
  }
}

export default GuessIt
