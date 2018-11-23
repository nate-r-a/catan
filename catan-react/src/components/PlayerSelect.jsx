import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Select, Input, Radio, List, Icon, Slider, InputNumber, Switch } from 'antd'

const Option = Select.Option
const InputGroup = Input.Group
const RadioGroup = Radio.Group

class PlayerSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      playerCount: 3
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

  updatePlayerCount = (e) => {
    this.setState({playerCount: e.target.value})
  }

  render() {
    let colors = ["red", "blue", "white", "orange", "green", "saddlebrown"]

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
            <img className="icon" src={ require(`../images/crown_filled.svg`) }/>
          </label>
        </div>
      )
    }

    const largestArmy = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"army" + i} id={"army" + i} type="checkbox" name="army" />
          <label onClick={() => this.check(i, "army")} for={"army" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" src={ require(`../images/swords_filled_no_dots.svg`) }/>
          </label>
        </div>
      )
    }

    const longestRoad = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"road" + i} id={"road" + i} type="checkbox" name="road" />
          <label onClick={() => this.check(i, "road")} for={"road" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" src={ require(`../images/road.svg`) }/>
          </label>
        </div>
      )
    }

    const victoryPointCards = (i) => {
      return(
        <div className="button">
          <img className="icon" style={{ filter:'none', opacity: .7 }} src={ require(`../images/backstage_filled.svg`) }/>
          <InputNumber min={0} max={5} size="small"/>
        </div>
      )
    }

    const playerCard = (i) => {
      return(
        <List.Item style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <Input disabled={true} addonBefore={i} style={{ width: '30px' }}/>
          <Select style={{ minWidth: '150px', maxWidth: '200px', width: '20%' }}>
            {playerList}
          </Select>
          <Select style={{ width: '55px', fontSize:'20px'}}>
            {colors.map((color) => {
              let style = {color: color}
              let textStyle = {color: color}
              if (color == "white") {
                style = {color: "#f1f1f1"}
                textStyle = {color: "#ababab"}
              }
              return(
                <Option value={color} key={color}>
                  <span style={style}>■ </span>
                </Option>
              )
            })}
          </Select>
          <InputNumber min={2} max={10} defaultValue={2} />
          {crownButton(i)}
          {longestRoad(i)}
          {largestArmy(i)}
          {victoryPointCards(i)}
        </List.Item>
      )
    }

    {/* TODO: Limit player selection to 6 players */}
    {/* TODO: Oops, maybe use a different Select thing (see input page) */}
    {/* TODO: Change Radio buttons to some sort of Checkbox that
      disables the others when checked */}
    {/* TODO: span.ant-checkbox-inner : can set background-color for color selection */}
    let cards = []
    for (var i=0; i < this.state.playerCount; i++) {
      cards.push(playerCard(i+1))
    }

    return (
      <div>
        {/*<Slider min={3} max={6} tipFormatter={null} dots={true} marks={{3:3, 4:4, 5:5, 6:6}} onChange={this.updatePlayerCount} />*/}
        <Radio.Group onChange={this.updatePlayerCount} value={this.state.playerCount}>
          <span style={{marginRight: '18px'}}>Number of players:</span>
          <Radio value={3}>3</Radio>
          <Radio value={4}>4</Radio>
        </Radio.Group>
        <List>
          {cards}
        </List>
      </div>
    )
  }
}

export default PlayerSelect
