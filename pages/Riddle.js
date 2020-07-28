import React, { Component } from 'react'
import riddleStyles from '../styles/riddle.module.css'
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
//import { TextInputField } from "evergreen-ui/commonjs/text-input";

class Riddle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: Array(25).fill(''),
      houseNumber: [1, 2, 3, 4, 5],
    }
  }

  handleInput = (info, index) => {
    const table = [...this.state.table]
    table[index] = info
    return table
  }

  getPlaceholderText = (index) => {
    let placeholder = ''

    if (index < 5) {
      placeholder = 'Color'
    } else if (index > 4 && index < 10) {
      placeholder = 'Name'
    } else if (index > 9 && index < 15) {
      placeholder = 'Newspaper'
    } else if (index > 4 && index < 20) {
      placeholder = 'Drink'
    } else if (index > 19 && index < 25) {
      placeholder = 'Pet'
    }
    return placeholder
  }

  render() {
    const table = this.state.table
    const houseNumber = this.state.houseNumber

    return (
      <Layout>
        <div className={riddleStyles.riddleScreen}></div>
        <div className={riddleStyles.centerRiddle}>
          <div className={riddleStyles.houseNumber}>
            {houseNumber.map((value, index) => {
              return <div key={index}>{houseNumber[index]}</div>
            })}
          </div>
          <div className={riddleStyles.RiddleBoard}>
            {table.map((value, index) => {
              return (
                <input
                  key={index}
                  className={riddleStyles.Riddlesquare}
                  type='text'
                  placeholder={this.getPlaceholderText(index)}
                  //value={table[{ index }]}
                  onChange={(evt) => {
                    //   const table2 = table.splice();

                    console.log(table)
                    const tableNew = this.handleInput(evt.target.value, index)
                    this.setState({ table: tableNew })

                    //   this.setState(prevState => {
                    //     const { table } = prevState;
                    //     table: table.splice(index, 0, evt.target.value);
                    //   });
                  }}
                />
              )
            })}
          </div>
          <Popover
            style={{ width: '80%' }}
            content={
              <Pane
                width={'95%'}
                height={'95%'}
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexDirection='column'
                style={{ width: '80%' }}
              >
                <div className={riddleStyles.infoList}>
                  <li>
                    1. {table[7]} bor i det {table[2]}a huset.
                  </li>
                  <li>
                    2. {table[9]} har en {table[24]} som husdjur.
                  </li>
                  <li>
                    3. {table[6]} dricker {table[16]}.
                  </li>
                  <li>
                    4. Det {table[3]}a huset ligger direkt till vänster om det{' '}
                    {table[4]}a huset.
                  </li>
                  <li>
                    5. Den som bor i det {table[3]}a huset dricker {table[18]}.
                  </li>
                  <li>
                    6. Husägaren som läser {table[12]} har en {table[22]} som
                    husdjur.
                  </li>
                  <li>
                    7. Den som bor i det {table[0]}a huset läser {table[10]}.
                  </li>
                  <li>8. Den som bor i huset i mitten dricker {table[17]}.</li>
                  <li>9. {table[5]} bor i det första huset.</li>
                  <li>
                    10. Husägaren som läser {table[11]} bor bredvid den som har
                    en {table[20]} som husdjur.
                  </li>
                  <li>
                    11. Husägaren som har ett {table[21]} som husdjur bor
                    bredvid den som läser {table[10]}.
                  </li>
                  <li>
                    12. Husägaren som läser {table[14]} dricker {table[19]}.
                  </li>
                  <li>
                    13. {table[8]} läser {table[13]}.
                  </li>
                  <li>
                    14. {table[5]} bor bredvid det {table[1]}a huset.
                  </li>
                  <li>
                    15. Husägaren som läser {table[11]} bor bredvid den som
                    dricker {table[15]}.
                  </li>
                  <li>Fråga: Vem har en {table[23]} som husdjur?</li>
                </div>
              </Pane>
            }
          >
            <Button style={{ margin: 10 }}>Get Riddle</Button>
          </Popover>
        </div>
        {/*}<div className="infoList">
            <li>
              1. {table[7]} bor i det {table[2]}a huset.
            </li>
            <li>
              2. {table[9]} har en {table[24]} som husdjur.
            </li>
            <li>
              3. {table[6]} dricker {table[16]}.
            </li>
            <li>
              4. Det {table[3]}a huset ligger direkt till vänster om det{" "}
              {table[4]}a huset.
            </li>
            <li>
              5. Den som bor i det {table[3]}a huset dricker {table[18]}.
            </li>
            <li>
              6. Husägaren som läser {table[12]} har en {table[22]} som husdjur.
            </li>
            <li>
              7. Den som bor i det {table[0]}a huset läser {table[10]}.
            </li>
            <li>8. Den som bor i huset i mitten dricker {table[17]}.</li>
            <li>9. {table[5]} bor i det första huset.</li>
            <li>
              10. Husägaren som läser {table[11]} bor bredvid den som har en{" "}
              {table[20]} som husdjur.
            </li>
            <li>
              11. Husägaren som har ett {table[21]} som husdjur bor bredvid den
              som läser {table[10]}.
            </li>
            <li>
              12. Husägaren som läser {table[14]} dricker {table[19]}.
            </li>
            <li>
              13. {table[8]} läser {table[13]}.
            </li>
            <li>
              14. {table[5]} bor bredvid det {table[1]}a huset.
            </li>
            <li>
              15. Husägaren som läser {table[11]} bor bredvid den som dricker{" "}
              {table[15]}.
            </li>
            <li>Fråga: Vem har en {table[23]} som husdjur?</li>
          </div>{*/}
      </Layout>
    )
  }
}

export default Riddle
