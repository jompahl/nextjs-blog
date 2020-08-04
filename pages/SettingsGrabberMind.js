import React, { Component } from 'react'
import {
  Button,
  TextInputField,
  Pane,
  SelectField,
  Checkbox,
  Switch,
} from 'evergreen-ui'
import Layout from '../components/layout'
import Grabbermind from './Grabbermind'
import styles from '../components/layout.module.css'

class SettingsGrabberMind extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerName: '',
      nbrOfColors: '8',
      nbrOfRows: '8',
      didstart: false,
      allowDuplicates: true,
    }

    this.handleChange = this.handleChange.bind(this) //fråga tobbe varför man gör såhär
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    this.setState({ didstart: true })
  }

  render() {
    const { playerName, nbrOfColors, nbrOfRows, didstart } = this.state

    console.log(this.state)

    if (didstart) {
      return <Grabbermind {...this.state} />
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
          <TextInputField
            label=' Player name'
            placeholder='Grabber name'
            value={playerName}
            onChange={(evt) => {
              this.setState({ playerName: evt.target.value })
            }}
          />
          <SelectField
            type='number'
            label='Chose number of colors'
            value={nbrOfColors}
            onChange={(evt) => {
              this.setState({ nbrOfColors: evt.target.value })
            }}
          >
            {Array.from({ length: 5 }, (key, index) => (
              <option key={index} value={index + 4}>
                {index + 4}
              </option>
            ))}
          </SelectField>
          <SelectField
            label='Choose number of rows'
            value={nbrOfRows}
            onChange={(evt) => {
              this.setState({ nbrOfRows: evt.target.value })
            }}
          >
            {Array.from({ length: 11 }, (key, index) => (
              <option key={index} value={index + 5}>
                {index + 5}
              </option>
            ))}
          </SelectField>
          <Checkbox
            style={{ marginLeft: 6 }}
            label='Allow duplicates?'
            checked={this.state.allowDuplicates}
            onChange={(e) =>
              this.setState({ allowDuplicates: e.target.checked })
            }
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

export default SettingsGrabberMind
