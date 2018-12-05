import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, InputNumber, Button, Icon, Select, Row, Col } from 'antd'

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
      var field_key = `player_games_attributes[${i}].largest_army`
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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('http://localhost:3002/api/v1/games/', {
          player_games_attributes: values["player_games_attributes"]
        })
      }
    });
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

    const largestArmy = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"army" + i} id={"army" + i} type="checkbox" name="army" value="true" />
          <label onClick={() => this.check(i, "army")} for={"army" + i} style={{ verticalAlign:"middle" }}>
            <img className="icon" src={ require(`../images/swords_filled_no_dots.svg`) }/>
          </label>
        </div>
      )
    }

    const longestRoad = (i) => {
      return(
        <div className="button">
          <input style={{ appearance: 'none'}} ref={"road" + i} id={"road" + i} type="checkbox" name="road" value={true} />
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
              rules: [{ required: true, message: 'Please input your name!' }], initialValue: "2"
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
              crownButton(i)
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator(`player_games_attributes[${i}].largest_army`, {valuePropName: 'checked', initialValue: false})(
              largestArmy(i)
            )}
          </FormItem>
        </Row>
      )
    }

    return (
      <Form layout='inline' onSubmit={this.handlePlayerSubmit}>
        {newPlayerGameRow(0)}
        {newPlayerGameRow(1)}
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
