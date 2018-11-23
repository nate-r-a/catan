import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, Button, Icon } from 'antd'

const FormItem = Form.Item

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class NewGame extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handlePlayerSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('http://localhost:3002/api/v1/players/', {
          player: values
        })
      }
    });
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.values)
    // axios.post('http://localhost:3002/api/v1/players/', {
    //   player: {
    //     name: e.target.value
    //   }
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <Form layout='inline' onSubmit={this.handlePlayerSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Create
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(NewGame)
