import React, { Component } from 'react'
import axios from 'axios'
import { Select } from 'antd'

const Option = Select.Option

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
    {/* TODO: Limit player selection to 6 players */}
    {/* TODO: Oops, maybe use a different Select thing (see input page) */}
    return (
      <Select
        mode="multiple"
        style={{ width: '500px', marginBottom: '1000px' }}
        size="large"
        allowClear={true}
      >
        {this.state.players.map((player) => {
          return(
            <Option key={player.name}>
              <span>
                <img src="https://github.com/nate-r-a/catan-website/blob/master/app/assets/images/sheep.png?raw=true" style={{ width: '20px', marginTop: '-4px'}} />
                &nbsp;{player.name}
              </span>
            </Option>
          )
        })}
      </Select>
    )
  }
}

export default PlayerSelect
