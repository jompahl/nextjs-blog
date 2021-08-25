import React, { Component } from 'react'
import SwipeButton from 'react-swipezor'

export class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answered: false,
      point: Array(8).fill(false),
    }
    this.swipeDone = this.swipeDone.bind(this)
  }

  swipeDone = (index, answer) => {
    const { point } = this.state
    console.log(point)
    point[index] = true
    this.props.handleAnswer(answer)
    this.setState({ point: point })
    console.log('bajs')
  }
  render() {
    const question = this.props.question
    const points = this.props.point

    if (!this.state.point.includes(false)) {
      // console.log('alla är besvarade')
      // this.props.handleNextQuestion()
    }

    const point = points.map((guess, index) => (
      <div>
        <SwipeButton
          mainText={guess.point}
          overlayText={
            this.state.point[index]
              ? guess.point + ' = ' + guess.answer
              : 'Swipe to get answer'
          }
          onSwipeDone={() => {
            this.swipeDone(index, guess.answer)
          }}
        />
      </div>
    ))

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '90%',
          padding: '10px',
        }}
      >
        <h3>{question}</h3>
        {point}
      </div>
    )
  }
}
