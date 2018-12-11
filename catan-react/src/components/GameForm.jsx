import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, InputNumber, Button, Icon, Select, Row, Col, Radio } from 'antd'
import BlankHexGrid from './BlankHexGrid'

const FormItem = Form.Item
const Option = Select.Option

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class GameForm extends Component {
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

    for (var i = checkboxes.length-1; i >= 0; i--) {
      var field_key = `player_games_attributes[${i}].${name}`
      if (checkboxes[i].id == id) {
        if (this.props.form.getFieldValue(field_key) == false) {
          var update_object = {[field_key]: true}

          this.props.form.setFieldsValue(update_object)
          // console.log("!")
          // console.log(i + "after: " + this.props.form.getFieldValue(field_key))
          // checkboxes[i].value = "false"
          // checkboxes[i].checked = false
          // continue
        } else {
          // console.log("@: " + field_key)
          // console.log(i + "before: " + this.props.form.getFieldValue(field_key))
          var update_object = {[field_key]: false}
          // checkboxes[i].checked = false
          this.props.form.setFieldsValue(update_object)
          // console.log(i + "after: " + this.props.form.getFieldValue(field_key))
          // continue
        }
        continue
      }

      var update_object = {[field_key]: false}
      checkboxes[i].checked = false
      this.props.form.setFieldsValue(update_object)
    }

    // console.log("***")
    // for (var x = checkboxes.length-1; x >= 0; x--) {
    //   console.log(checkboxes[x].id + ": " + checkboxes[x].value)
    //   console.log("---")
    // }
    // console.log("***")
  }

  handlePlayerSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.form.getFieldValue('layout_string'))
    this.props.form.setFieldsValue({layout_string: document.getElementById('layout_string').value})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values: ', values);
        console.log(values['layout_string'])
        axios.post('http://localhost:3002/api/v1/games/', {
          game: { player_games_attributes: values["player_games_attributes"],
                  layout_string: values["layout_string"] }
        })
      }
    });
  }

  updatePlayerCount = (e) => {
    this.setState({playerCount: e.target.value})
  }

  render() {
    {/* TODO: Incorporate player position to `id` and `for` */}
    {/* TODO: Just make this a checkbox like the others, or really figure out how radio buttons work (how to send values when checked/unchecked) */}
    const crownButton = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"winner" + i} id={"winner" + i} type="radio" name="winner" value={true} />
          <label for={"winner" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" src={ require(`../images/crown_filled.svg`) }/>
          </label>
        </div>
      )
    }

    const newCrownButton = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"win" + i} id={"win" + i} type="checkbox" name="win" value="true" />
          <label onClick={() => this.check(i, "win")} for={"win" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" src={ require(`../images/crown_filled.svg`) }/>
          </label>
        </div>
      )
    }

    const largestArmy = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"largest_army" + i} id={"largest_army" + i} type="checkbox" name="largest_army" value="true" />
          <label onClick={() => this.check(i, "largest_army")} for={"largest_army" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" src={ require(`../images/swords_filled_no_dots.svg`) }/>
          </label>
        </div>
      )
    }

    const longestRoad = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"longest_road" + i} id={"longest_road" + i} type="checkbox" name="longest_road" value={true} />
          <label onClick={() => this.check(i, "longest_road")} for={"longest_road" + i} style={{ verticalAlign:"middle" }}>
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

    const playerList = this.state.players.map((player) => {
      return(
        <Option value={player.id} key={player.name + player.id}>
          <span>
            <img src="https://github.com/nate-r-a/catan-website/blob/master/app/assets/images/sheep.png?raw=true" style={{ width: '20px', marginTop: '-4px'}} />
            &nbsp;{player.name}
          </span>
        </Option>
      )
    })

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const newPlayerGameRow = (i) => {
      return(
        <Row>
          <FormItem>
            {getFieldDecorator(`player_games_attributes[${i}].player_id`, {
              rules: [{ required: true, message: 'Please input your name!' }], initialValue: "5"
            })(
              <Select style={{width: "120px"}}>
                {playerList}
              </Select>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator(`player_games_attributes[${i}].score`, {
              rules: [{ required: true }], initialValue: "5"
            })(
              <InputNumber placeholder="score" />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator(`player_games_attributes[${i}].win`)(
              newCrownButton(i)
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator(`player_games_attributes[${i}].largest_army`, {valuePropName: 'checked', initialValue: false})(
              largestArmy(i)
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator(`player_games_attributes[${i}].longest_road`, {valuePropName: 'checked', initialValue: false})(
              longestRoad(i)
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator(`player_games_attributes[${i}].victory_point_cards`, {valuePropName: 'checked', initialValue: false})(
              victoryPointCards(i)
            )}
          </FormItem>
        </Row>
      )
    }

    let playerGameRows = []
    for (var i=0; i < this.state.playerCount; i++) {
      playerGameRows.push(newPlayerGameRow(i))
    }

    return (
      <Form layout='inline' onSubmit={this.handlePlayerSubmit}>
        <Row>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <BlankHexGrid />
          </Col>
        </Row>
        <Radio.Group onChange={this.updatePlayerCount} value={this.state.playerCount}>
          <span style={{marginRight: '18px'}}>Number of players:</span>
          <Radio value={3}>3</Radio>
          <Radio value={4}>4</Radio>
        </Radio.Group>
        <FormItem>
          {getFieldDecorator('layout_string', { initialValue: "",
            rules: [{ required: true }]
          })(
            <Input />
          )}
        </FormItem>
        {playerGameRows}
        <FormItem>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(GameForm)
