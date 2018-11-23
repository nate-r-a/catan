/* TODO: Get back to this */
import React from 'react'
import { Form, Select, InputNumber } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
const playerList = this.props.players.map((player) => {
  return(
    <Option value={player.id} key={player.name + player.id}>
      <span>
        <img src="https://github.com/nate-r-a/catan-website/blob/master/app/assets/images/sheep.png?raw=true" style={{ width: '20px', marginTop: '-4px'}} />
        &nbsp;{player.name}
      </span>
    </Option>
  )
})

const PlayerGameForm = () => {
  return(
    <div>
      <FormItem>
        {getFieldDecorator('player_id', {
          rules: [{ required: true, message: 'Please input your name!' }],
        })(
          <Select style={{width: "120px"}}>
            {playerList}
          </Select>
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('score', {
          rules: [{ required: true }],
        })(
          <InputNumber placeholder="score" />
        )}
      </FormItem>
    </div>
  )
}


export default PlayerGameForm
