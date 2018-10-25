import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Select, Input, Radio, List } from 'antd'

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
    axios.get('http://localhost:3000/api/v1/players/')
    .then(response => {
      console.log("!!!")
      console.log(response)
      var playerData = response
      this.setState({players: response.data})
    })
    .catch(error => console.log(error))
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
    {/* TODO: Limit player selection to 6 players */}
    {/* TODO: Oops, maybe use a different Select thing (see input page) */}
    {/* TODO: Change Radio buttons to some sort of Checkbox that
      disables the others when checked */}
    return (
      <div>
        <Row>
          <List>
            <RadioGroup>
              <List.Item style={{ width: '100%'}} actions={[<Radio value={1} />]}>
                <InputGroup compact>
                  <Input disabled={true} addonBefore="1" style={{ width: '30px' }}/>
                  <Select style={{ width: '20%' }}>
                    {playerList}
                  </Select>
                  <Input style={{ width: '60%' }}/>
                </InputGroup>
              </List.Item>

              {/* TODO: Change this width to 100%?  */}
              <List.Item style={{ width: '800px'}} actions={[<Radio value={2} />]}>
                <InputGroup compact>
                  <Input disabled={true} addonBefore="2" style={{ width: '30px' }}/>
                  <Select style={{ width: '20%' }}>
                    {playerList}
                  </Select>
                  <Input style={{ width: '60%' }}/>
                </InputGroup>
              </List.Item>
            </RadioGroup>
          </List>
        </Row>

        <List>
          <List.Item>
            test content
          </List.Item>
          <List.Item>
            test content
          </List.Item>

        </List>




        <Select
          mode="multiple"
          style={{ width: '500px', marginBottom: '400px' }}
          size="large"
          allowClear={true}
        >
          {playerList}
        </Select>
      </div>





    )
  }
}

export default PlayerSelect
