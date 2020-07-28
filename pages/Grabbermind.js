import React, { Component } from 'react'
import { Popover } from 'evergreen-ui/commonjs/popover'
import { Pane } from 'evergreen-ui/commonjs/layers'
import { Button, Icon, InfoSignIcon, Tooltip, toaster } from 'evergreen-ui'
//import { MdRepeat } from 'react-icons/md'
import { Position } from 'evergreen-ui/commonjs/constants'
import TimerGrabberMind from './TimerGrabberMind'
import { IconButton } from 'evergreen-ui/commonjs/buttons'
import Layout from '../components/layout'

import mind from '../styles/grabberMind.module.css'

import ReactToolTip from 'react-tooltip'

class Grabbermind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      table: Array(parseInt(this.props.nbrOfRows * 4)).fill(''),
      buttons: [
        'Red',
        'Green',
        'Blue',
        'Orange',
        'White',
        'Gray',
        'Pink',
        'Yellow',
      ],
      sidebarResults: Array(8).fill(''),
      rowCount: 0,
      gameIsOn: false,
      gameWon: false,
      gameLost: false,
      colorArray: Array(4).fill(''),
      startTime: Date,
    }
  }

  startGame() {
    const { table, buttons, rowCount, sidebarResults, gameIsOn } = this.state

    if (gameIsOn) {
      window.location.reload(true)
    }

    this.setState({ gameIsOn: true })

    var time = new Date()
    console.log('time now' + time)

    this.setState({ startTime: time })

    let tmpArray = this.getSecretCode()

    if (!this.props.allowDuplicates) {
      while (this.checkForDublicates(tmpArray)) {
        console.log('inside whilelopop')
        tmpArray = this.getSecretCode()
      }
    }

    console.log(tmpArray)
    this.setState({ colorArray: tmpArray })
  }

  checkForDublicates = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i === j) {
          continue
        }
        if (array[i] === array[j]) {
          return true
        }
      }
    }
    return false
  }

  handleRestart() {}

  getSecretCode() {
    const { buttons, colorArray } = this.state

    for (let i = 0; i < colorArray.length; i++) {
      console.log('heaalå')
      colorArray[i] = buttons[this.getRandomInt(0, this.props.nbrOfColors - 1)]
    }

    return colorArray
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  changeColor = (color, index) => {
    console.log(color, index)
    let tmpBoard = [...this.state.table]
    tmpBoard[index] = color
    this.setState({ table: tmpBoard })
    console.log(tmpBoard)
  }

  checkRow() {
    let { rowCount, table, colorArray, gameIsOn } = this.state

    console.log('checkrow pushed ' + this.state.colorArray)

    let currentRowNumber = 4

    if (!gameIsOn) {
      toaster.danger('Please start game before checking row')
      return
    }

    if (rowCount !== 0) {
      currentRowNumber = rowCount * 4 + 4
    }

    for (var i = 0; i < currentRowNumber; i++) {
      if (table[i] === '') {
        toaster.danger('Please fill the whole row')
        return
      }
    }

    rowCount++

    console.log('rowcount: ' + rowCount)

    this.setState({ rowCount: rowCount })
  }

  getCorrectedRows = () => {
    const { colorArray: correctAnswer, rowCount, table } = this.state //fråga tobbe angående colorArray:
    const rows = []

    for (let i = 0; i < table.length / 4; i++) {
      if (i >= rowCount) {
        rows.push([])
        continue //fråga tobbe vad meniingen med denna if satsen är
      }

      const answers = table.slice(i * 4, i * 4 + 4)
      const results = Array(4).fill('')

      for (let i = 0; i < answers.length; i++) {
        const answer = answers[i]

        if (answer === correctAnswer[i]) {
          results[i] = ['white', answer]
        }
      }

      for (let i = 0; i < answers.length; i++) {
        const answer = answers[i]

        if (results[i] || !correctAnswer.includes(answer)) {
          continue // fråga tobbe varför vi gör denna checken är det för att effektivisera?
        }

        const total = correctAnswer.filter((color) => color === answer).length
        const current = results.filter((result) => result[1] === answer).length

        if (current < total) {
          results[i] = ['red', answer]
        }
      }

      const colors = results.map((r) => r[0]).filter((r) => r != null)
      rows.push(colors)
    }

    return rows
  }

  timeDifference(endTime) {
    const { table, rowCount, startTime } = this.state

    var difference = endTime.getTime() - startTime.getTime()

    var secondsDifference = Math.floor(difference / 1000)

    var factor = 500 - secondsDifference

    var score = (table.length / 4 - rowCount) * factor

    console.log(
      'Jompahl seconds difference' + secondsDifference + 'score' + score
    )

    return score
  }

  onGameEnded(seconds) {
    console.log('heejejsadjsandj' + seconds)
    this.setState({ gameLost: true })
  }

  getArrow(index) {
    if (index === this.state.rowCount) {
      return (
        <Icon
          icon='arrow-right'
          size={40}
          color='success'
          style={{
            position: 'absolute',
            visibility: !this.state.gameIsOn ? 'hidden' : 'visible',
          }}
        />
      )
    }
  }

  render() {
    const {
      table,
      buttons,
      rowCount,
      sidebarResults,
      gameIsOn,
      gameLost,
    } = this.state

    if (!gameIsOn) {
      console.log('game is on falskt')
    }

    if (gameLost) {
      return (
        <div
          className={mind.winningPage}
          //style={{ visibility: gameLost ? 'visible' : 'hidden' }}
        >
          Sorry time is up
          <button
            onClick={(event) => {
              window.location.reload(true)
            }}
            style={{ opacity: 1, padding: 20, marginTop: 20 }}
          >
            Play Again?
          </button>
        </div>
      )
    }

    const correctedRows = this.getCorrectedRows()
    const lastRow = rowCount > 0 ? correctedRows[rowCount - 1] : []
    const didWin = lastRow.filter((color) => color === 'white').length === 4
    let didLose = false

    if (didWin) {
      var date = new Date()
      this.timeDifference(date)
    }

    if (!didWin && rowCount === table.length / 4) {
      didLose = true
    }

    let disableLow = 4 + rowCount * 4
    let disableHigh = rowCount * 4

    return (
      <Layout>
        <div className={mind.grabberMind}>
          <div
            className={mind.winningPage}
            style={{ visibility: didWin ? 'visible' : 'hidden' }}
          >
            <div>
              Congratulations!! {this.props.playerName} Your score is:
              {didWin ? ' ' + this.timeDifference(new Date()) : 'bajs'}
            </div>
            <button
              onClick={(event) => {
                window.location.reload(true)
              }}
              style={{ opacity: 1, padding: 20, marginTop: 20 }}
            >
              Play Again
            </button>
          </div>
          <div
            className={mind.winningPage}
            style={{ visibility: didLose ? 'visible' : 'hidden' }}
          >
            Sorry you did not get the code, the correct code was
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {this.state.colorArray.map((value, index) => {
                return (
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: value,
                      margin: 5,
                    }}
                  ></div>
                )
              })}
            </div>
            <button
              onClick={(event) => {
                window.location.reload(true)
              }}
              style={{ opacity: 1, padding: 20, marginTop: 20 }}
            >
              Play Again
            </button>
          </div>

          <div
            className={mind.sideBar}
            style={{ height: this.props.nbrOfRows * 60 }}
            data-tip={gameIsOn ? 'current row ' + (rowCount + 1) : ''}
            data-for='toolTip1'
            data-place='top'
          >
            {' '}
            {correctedRows.map((row, index) => (
              <div className={mind.sidebarResults} key={index}>
                {this.getArrow(index)}
              </div>
            ))}
            <ReactToolTip id='toolTip1' />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <TimerGrabberMind
              seconds={0}
              isRunning={gameIsOn}
              didWin={didWin}
              onGameEnded={() => {
                this.onGameEnded()
              }}
            />
            <div
              className={mind.grabberMindTable}
              style={{ height: this.props.nbrOfRows * 60 }}
            >
              {table.map((value, index) => {
                return (
                  <Popover
                    key={index}
                    position={Position.TOP}
                    content={({ close }) => (
                      <Pane
                        minWidth={174}
                        className={mind.popover}
                        background='white'
                        paddingY={0}
                        display='grid'
                        gridTemplateColumns='repeat(4, auto)'
                        gridGap={10}
                      >
                        {buttons
                          .slice(0, this.props.nbrOfColors)
                          .map((value) => {
                            return (
                              <button
                                className={mind.popoverButton}
                                key={value}
                                style={{
                                  background: value,
                                  borderradius: '50%',
                                  border: '2px solid rgba(0, 0, 0, .2)',
                                  height: 30,
                                  width: 30,
                                  margin: 5,
                                }}
                                onClick={(event) => {
                                  this.changeColor(value, index)
                                }}
                              />
                            )
                          })}
                      </Pane>
                    )}
                  >
                    <Button
                      className={mind.button}
                      justifyContent='center'
                      alignItems='center'
                      height={60}
                      //width='25%'
                      disabled={
                        gameIsOn
                          ? index >= disableLow || index < disableHigh
                          : 'none'
                      }
                      style={{
                        position: 'absolute',
                        left: 60 * (index % 4),
                        bottom: 60 * Math.floor(index / 4),
                        width: '25%',
                      }}
                    >
                      <Pane
                        background={value}
                        flex='0 0 50px'
                        borderRadius='50%'
                        justifySelf='center'
                        height={50}
                        width={50}
                        style={{
                          border: value
                            ? '2px solid rgba(0, 0, 0, .2)'
                            : 'none',
                        }}
                      />
                    </Button>
                  </Popover>
                )
              })}
            </div>{' '}
            <div className={mind.buttonHolder} style={{ paddingBottom: 30 }}>
              <IconButton icon='settings' size={22} />
              <Button
                onClick={(event) => {
                  this.checkRow()
                }}
              >
                Check row
              </Button>
              <Button
                onClick={(event) => {
                  this.startGame()
                }}
              >
                {!gameIsOn ? 'Start Game' : 'restart'}
              </Button>{' '}
            </div>
            <text style={{ marginTop: 5 }}></text>
          </div>
          {}

          <div
            className={mind.sidebarResult}
            style={{ height: parseInt(this.props.nbrOfRows) * 60 }}
          >
            {' '}
            {correctedRows.map((row, index) => (
              <div className={mind.sidebarResults} key={index}>
                {' '}
                <Result results={row} />{' '}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

class Result extends React.Component {
  render() {
    const { answers, correctAnswer, results } = this.props
    if (!Array.isArray(results)) {
      console.log('fastnade i första +' + answers)
      return null
    } else if (Array.isArray(answers)) {
      console.log(results)
    }

    console.log('jompahl' + results)

    return (
      <div className={mind.pinHolder}>
        {results.map((value, index) => {
          return (
            <div
              key={index}
              className={mind.sidebarResult}
              data-tip={
                value === 'white'
                  ? 'Correct color correct place'
                  : 'Correct color wrong place'
              }
              data-for='toolTipPin'
              data-place='top'
              className={mind.correctingPins}
              style={{
                background: value,
                border: value ? '2px solid rgba(0, 0, 0, .2)' : 'none',
                borderradius: '50%',
                height: value ? 20 : 'none',
                width: value ? 20 : 'none',
                margin: value ? 5 : 'none',
              }}
            >
              <ReactToolTip id='toolTipPin' />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Grabbermind
