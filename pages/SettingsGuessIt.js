import React, { Component } from 'react'
import TicTacToe from './TicTacToe'
import { Button, TextInputField, Pane, SelectField } from 'evergreen-ui'
import Layout from '../components/layout'
import GuessIt from './GuessIt'

class SettingsGuessIt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nbrOfPlayers: 2,
      players: ['Jompahl', 'Henrik', 'Erik', 'Klara'],
      didstart: false,
      points: 10,
      playerNameError: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(key, event) {
    const { players } = this.state
    players[key] = event.target.value
    this.setState({ players })
  }

  checkFields() {
    const { players, nbrOfPlayers } = this.state
    // for(const i = 0; i < nbrOfPlayers; i++) {
    //   if(players[i] ==)
    // }
  }

  handleSubmit(event) {
    const { players, nbrOfPlayers } = this.state
    /*alert("A name was submitted: " + this.state.value);
    event.preventDefault();*/
    console.log(this.state)
    this.checkFields()
    //alert(this.state)
    this.setState({ didstart: true })
  }

  render() {
    const { player1Name, player2Name, time, increment, didstart, points } =
      this.state

    if (didstart) {
      return <GuessIt {...this.state} />
    }
    return (
      <Pane
        display='flex'
        alignItems='center'
        flexDirection='column'
        justifyContent='center'
        marginTop={50}
      >
        <Pane
          width={600}
          padding={20}
          borderRadius={3}
          border='default'
          display='flex'
          flexDirection='column'
          style={{ width: '95%', maxWidth: 650 }}
        >
          <SelectField
            label='Choose number of players'
            value={this.state.nbrOfPlayers}
            onChange={(evt) => {
              this.setState({ nbrOfPlayers: evt.target.value })
            }}
          >
            {' '}
            <option key='2' value={2}>
              2
            </option>
            <option key='3' value={3}>
              3
            </option>
            <option key='4' value={4}>
              4
            </option>
          </SelectField>

          {Array.from({ length: this.state.nbrOfPlayers }, (key, index) => (
            <TextInputField
              id={index}
              label={'Player ' + (index + 1)}
              placeholder='Player name'
              required
              onChange={(evt) => {
                this.handleChange(index, evt)
              }}
            />
          ))}

          {/* <TextInputField
            label=' Player 1'
            placeholder='Firstname Lastname'
            value={player1Name}
            onChange={(evt) => {
              this.setState({ player1Name: evt.target.value })
            }}
          />
          <TextInputField
            label=' Player 2'
            placeholder='Firstname Lastname'
            value={player2Name}
            onChange={(evt) => {
              this.setState({ player2Name: evt.target.value })
            }}
          /> */}
          <TextInputField
            id='numberField'
            type='number'
            label='Choose points to play for'
            placeholder='10'
            value={points}
            onChange={(evt) => {
              this.setState({ points: evt.target.value })
            }}
          />

          <Pane display='flex' justifyContent='flex-end'>
            <Button
              appearance='primary'
              onClick={this.handleSubmit}
              iconBefore='tick-circle'
            >
              Start Game
            </Button>
          </Pane>
        </Pane>
      </Pane>
    )
  }
}

export default SettingsGuessIt
