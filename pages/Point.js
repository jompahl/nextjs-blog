//import React from 'react'
import React, { Component } from 'react'

export class Point extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: props.playerName,
      gamePoints: props.gamePoints,
      points: this.props.point,
    }
  }

  render() {
    const { player, points } = this.state
    console.log(points)
    console.log(this.props.point)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4>{player}</h4>
        {points}
      </div>
    )
  }
}
