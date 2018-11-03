import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Select, Input, Radio, List, Icon } from 'antd'

const Option = Select.Option
const InputGroup = Input.Group
const RadioGroup = Radio.Group

class PlayerSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/v1/players/')
    .then(response => {
      var playerData = response
      this.setState({players: response.data})
    })
    .catch(error => console.log(error))
  }

  check(i, name) {
    let id = name + i
    let checkboxes = new Array()
    for (var key in this.refs) {
      checkboxes.push(this.refs[key])
    }

    checkboxes = checkboxes.filter(checkbox => checkbox.id.startsWith(name))

    console.log(checkboxes)
    for (var i = checkboxes.length-1; i >= 0; i--) {
      if (checkboxes[i].id == id) {
        continue
      }
      checkboxes[i].checked = false
    }

  }



  render() {
    const playerList = this.state.players.map((player) => {
      return(
        <Option key={player.name}>
          <span>
            <img src="https://github.com/nate-r-a/catan-website/blob/master/app/assets/images/sheep.png?raw=true" style={{ width: '20px', marginTop: '-4px'}} />
            &nbsp;{player.name}
          </span>
        </Option>
      )
    })


    {/* TODO: Incorporate player position to `id` and `for` */}
    const crownButton = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"winner" + i} id={"winner" + i} type="radio" name="winner" />
          <label for={"winner" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" style={{ width: '26px', height: '26px'}} src={ require(`../images/crown_filled.svg`) }/>
          </label>
        </div>
      )
    }

    const largestArmy = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"army" + i} id={"army" + i} type="checkbox" name="army" />
          <label onClick={() => this.check(i, "army")} for={"army" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" style={{ width: '26px', height: '26px'}} src={ require(`../images/swords_filled.svg`) }/>
          </label>
        </div>
      )
    }

    const longestRoad = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"road" + i} id={"road" + i} type="checkbox" name="road" />
          <label onClick={() => this.check(i, "road")} for={"road" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" style={{ width: '26px', height: '26px'}} src={ require(`../images/road.svg`) }/>
          </label>
        </div>
      )
    }


    {/* TODO: Limit player selection to 6 players */}
    {/* TODO: Oops, maybe use a different Select thing (see input page) */}
    {/* TODO: Change Radio buttons to some sort of Checkbox that
      disables the others when checked */}
    {/* TODO: span.ant-checkbox-inner : can set background-color for color selection */}
    return (
      <div>
        <Row>
          <List>
            <List.Item>
              <Input disabled={true} addonBefore="1" style={{ width: '30px' }}/>
              <Select style={{ minWidth: '150px', maxWidth: '200px', width: '20%' }}>
                {playerList}
              </Select>
              {crownButton(1)}
              {crownButton(2)}
              {crownButton(3)}
              {longestRoad(1)}
              {largestArmy(1)}
            </List.Item>
          </List>
        </Row>
      </div>
    )
  }
}

export default PlayerSelect
