import React, { Component } from 'react'
import {
  Table,
  Combobox,
  Radio,
  Checkbox,
  Button,
  Popover,
  Pane,
} from 'evergreen-ui'
import Layout from '../components/layout'

import { grabbar } from '../lib/data'
//import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import grabbLiga from '../styles/grabbLiga.module.css'
//import { GrabbModel } from "./GrabbModel";

class GrabbLiga extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winsSelected: false,
      win: false,
      grabb: null,
      points: null,
      date: new Date(),
      updateTable: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  winOrNot() {
    if (this.state.win === false) {
      return 'han vann inte grabbkampen'
    } else {
      return 'han vann även grabbkampen'
    }
  }

  handleClick(event) {
    const { grabb, points, win, updateTable } = this.state

    if (grabb !== null && points !== null) {
      for (var object in grabbar) {
        if (grabbar[object].name === grabb) {
          grabbar[object].results.push({ points, win })
          const winOrNot = this.winOrNot
          console.log(grabbar[object].results)
          console.log(grabbar[object].points)
          this.setState({ updateTable: updateTable + 1 })
          alert('hej')
          return
        }
      }
    }
  }

  howManyWins = (grabb) => {
    let sum = 0
    for (var i in grabb.results) {
      console.log('i loop')
      if (grabb.results[i].win === true) {
        console.log('i if')
        sum = sum + 1
      }
    }
    console.log(sum)
    return sum
  }

  howManyPoints = (grabb) => {
    let sum = 0
    for (var i in grabb.results) {
      sum = sum + grabb.results[i].points
    }
    return sum
  }

  render() {
    const { grabb, points, win, winsSelected } = this.state

    console.log(this.state)

    //Sorts the array in order of points, highest to lowest todo - user should be able to decide what to sort
    if (!winsSelected) {
      grabbar.sort(function (a, b) {
        return b.points - a.points
      })
    } else {
      grabbar.sort(function (a, b) {
        console.log('inne i sortering')
        return b.wins - a.wins
      })
    }

    return (
      <Layout>
        <div className={grabbLiga.grabbligaPage}>
          <div className={grabbLiga.table}>
            <Table>
              <Table.Head>
                <Table.TextHeaderCell>Grabb</Table.TextHeaderCell>
                <Table.TextHeaderCell
                  isSelectable
                  onSelect={() => this.setState({ winsSelected: true })}
                >
                  Vinster
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>Poäng</Table.TextHeaderCell>
              </Table.Head>
              <Table.Body height={480}>
                {grabbar.map((grabb) => (
                  <Table.Row
                    key={grabb.name}
                    isSelectable
                    onSelect={() =>
                      alert(
                        'Du valde ' +
                          grabb.name +
                          ' han har vunnit ' +
                          this.howManyWins(grabb) +
                          ' gånger'
                      )
                    }
                  >
                    <Table.TextCell>{grabb.name}</Table.TextCell>
                    <Table.TextCell>{this.howManyWins(grabb)}</Table.TextCell>
                    <Table.TextCell isNumber>
                      {this.howManyPoints(grabb)}
                    </Table.TextCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
          <div className={grabbLiga.addScore}>
            <Popover
              content={({ close }) => (
                <Pane
                  width={320}
                  height={320}
                  paddingX={40}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexDirection='column'
                >
                  <Combobox
                    items={grabbar.map((grabb) => grabb.name)}
                    placeholder='Grabb'
                    onChange={(selected) => this.setState({ grabb: selected })}
                  />
                  <Combobox
                    items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                    placeholder='Poäng'
                    onChange={(selected) => this.setState({ points: selected })}
                  />
                  {/*<DatePicker
                  selected={this.state.date}
                  onChange={(selected) => this.setState({ date: selected })}
                />*/}
                  <Checkbox
                    label='Vinst'
                    checked={win}
                    onChange={(e) => this.setState({ win: e.target.checked })}
                  />
                  <Button
                    className='submitScore'
                    iconBefore='tick-circle'
                    color='success'
                    marginLeft={10}
                    onClick={this.handleClick}
                  >
                    Sumbit
                  </Button>
                  <Button onClick={close}>Close</Button>
                </Pane>
              )}
            >
              <Button>Add Grabbscore</Button>
            </Popover>
          </div>
        </div>
      </Layout>
    )
  }
}

export default GrabbLiga
