//import React from 'react'
import next from 'next'
import React, { Component } from 'react'

export class Point extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: props.playerName,
      gamePoints: props.gamePoints,
      points: this.props.point,
      round: [],
    }
  }

  // callChildMethod(turn) {
  //   console.log('turn: ' + turn)
  //   console.log(this.state.player)
  //   // to return some value
  //   // return this.state.someValue;
  //   if (turn == this.state.player) {
  //     console.log('kom in här')
  //     this.incrementPoint()
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      // const playerInRound = round.find(function (player) {
      //   return player.player === turn
      // })

      // if (playerInRound) {
      //   console.log(playerInRound)
      //   playerInRound.points = playerInRound.points + 1
      // } else {
      //   console.log('fanns ej')
      //   const roundObject = { player: turn, points: 1, stillInGame: true }
      //   round.push(roundObject)
      // }
      this.setState({
        points: nextProps.point,
        round: nextProps.round,
      })
    }
  }

  render() {
    const { player, points, round } = this.state
    //console.log(round)
    const playerInRound = round.find(function (roundPlayer) {
      return roundPlayer.player === player
    })
    console.log(playerInRound)
    const playerStillInGame = playerInRound ? playerInRound.stillInGame : null

    const showRoundPoints = () => {
      if (playerInRound != null) {
        return playerInRound.stillInGame
      }
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4 style={{ color: playerStillInGame ? 'green' : 'red' }}>{player}</h4>
        {points} {playerStillInGame ? '+ ' + playerInRound.points : ''}
      </div>
    )
  }
}
