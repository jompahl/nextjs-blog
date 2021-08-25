import React, { Component } from 'react'
import { questions } from '../lib/GuessItQuestions'
import { Question } from '../lib/Question'
import mind from '../styles/grabberMind.module.css'
import { Point } from './Point'
//import { Pane, Button, Dialog, Icon, InfoSignIcon, Tooltip, toaster, defaultTheme } from 'evergreen-ui'
//import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//const questions1 = questions[0]

class GuessIt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: this.getRandomDifferent(questions),
      nbrOfPlayers: this.props.nbrOfPlayers,
      players: this.props.players,
      points: this.props.points,
      showDialog: false,
      answer: '',
      turn: this.props.players[0].name,
      round: [],
    }
  }

  getRandomDifferent(arr, last = undefined) {
    if (arr.length === 0) {
      return
    } else if (arr.length === 1) {
      return arr[0]
    } else {
      let num = 0
      do {
        num = Math.floor(Math.random() * arr.length)
      } while (arr[num] === last)
      return arr[num]
    }
  }

  nextTurn() {
    const { players, turn, round } = this.state
    //check if no players still in round
    var playersStillPlaying = round.some(function (roundObj) {
      return roundObj.stillInGame === true
    })

    if (!playersStillPlaying && round.length === players.length) {
      //call end round
      this.handleNextQuestion()
      console.log('inga spelare kvar')
      return
    }

    //gets index of current player
    const index = players.findIndex(function (player) {
      return player.name === turn
    })

    //checks if array is filled with all players
    if (round.length < players.length) {
      this.setState({ turn: players[index + 1].name })
      return
    }

    let playersStillInRound = round.filter(
      (roundObject) => roundObject['stillInGame'] === true
    )

    //if there is only one player left, let that player continue
    if (playersStillInRound.length === 1) {
      this.setState({ turn: playersStillInRound[0].player })
      return
    }

    //if there is more than one player left find the next player that is not the current player
    for (let j = index; j < players.length; j++) {
      if (round[j].stillInGame && round[j].player != turn) {
        this.setState({ turn: players[j].name })
        return
      }
      if (j === players.length - 1) {
        j = -1
      }
    }
  }

  handleCorrectAnswer() {
    const { players, turn, round } = this.state
    console.log('svarade rätt' + 'turn: ' + turn)
    this.setState({ showDialog: false })

    let copyPlayers = [...this.state.players]
    var index

    for (let i = 0; i < players.length; i++) {
      if (players[i].name == turn) {
        index = i
      }
    }

    const playerInRound = round.find(function (player) {
      return player.player === turn
    })

    if (playerInRound) {
      console.log(playerInRound)
      playerInRound.points = playerInRound.points + 1
    } else {
      console.log('fanns ej')
      const roundObject = { player: turn, points: 1, stillInGame: true }
      round.push(roundObject)
    }

    // var playerToChange = copyPlayers[index]
    // playerToChange.points = playerToChange.points + 1

    // copyPlayers[index] = playerToChange

    //this.setState({ players: copyPlayers })

    //this.setState({ round: round })

    // if (index == players.length - 1) {
    //   this.setState({ turn: players[0].name })
    // } else {
    //   this.setState({ turn: players[index + 1].name })
    // }
    this.nextTurn()
  }

  handleWrongAnswer() {
    const { players, turn, round } = this.state

    console.log('svarade fel')
    const playerInRound = round.find(function (player) {
      return player.player === turn
    })

    if (playerInRound) {
      console.log(playerInRound)
      //playerInRound.points = playerInRound.points + 1
      playerInRound.stillInGame = false
    } else {
      console.log('fanns ej')
      const roundObject = { player: turn, points: 0, stillInGame: false }
      round.push(roundObject)
    }

    // var index
    // for (let i = 0; i < players.length; i++) {
    //   if (players[i].name == turn) {
    //     index = i
    //   }
    // }

    // if (index == players.length - 1) {
    //   this.setState({ turn: players[0].name })
    // } else {
    //   this.setState({ turn: players[index + 1].name })
    // }
    this.nextTurn()
  }
  handleBanking() {
    console.log('bankat')
    const { nbrOfPlayers, players, points, showDialog, answer, turn, round } =
      this.state

    let copyPlayers = [...this.state.players]

    const index = players.findIndex(function (player) {
      return player.name === turn
    })
    // let playerPoints = players.find((player) => player['name'] === turn)

    // let roundPoints = round.find((player) => player['player'] === turn)

    // playerPoints = roundPoints.points
    const playerInRound = round.find(function (player) {
      return player.player === turn
    })

    var playerToChange = copyPlayers[index]
    playerToChange.points = playerToChange.points + playerInRound.points

    copyPlayers[index] = playerToChange

    this.setState({ players: copyPlayers })

    if (playerInRound) {
      playerInRound.stillInGame = false
    } else {
      const roundObject = { player: turn, points: 0, stillInGame: false }
      round.push(roundObject)
    }

    this.nextTurn()
  }

  handleNextQuestion() {
    console.log('sista innan vi går vidare till näsat fråga')
    const question = this.getRandomDifferent(questions, this.state.question)
    this.setState({ question: question })
  }

  handleAnswer = (answer) => {
    this.setState({ showDialog: true, answer: answer })
  }

  render() {
    const {
      nbrOfPlayers,
      players,
      points,
      showDialog,
      answer,
      turn,
      round,
      question,
    } = this.state

    console.log(this.state)

    const showBankButton = round.length == players.length ? false : true

    //const question = this.getRandomDifferent(questions)

    //console.log(questions)

    return (
      <div>
        <Question
          question={question.question}
          point={question.point}
          handleAnswer={this.handleAnswer}
          handleNextQuestion={this.handleNextQuestion}
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
          <button
            disabled={showBankButton}
            onClick={() => {
              this.handleBanking()
            }}
          >
            Bank points
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {players.map((player, index) => (
            <Point
              key={index}
              playerName={player.name}
              point={player.points}
              round={round}
            ></Point>
          ))}
        </div>
      </div>
    )
  }
}

export default GuessIt
