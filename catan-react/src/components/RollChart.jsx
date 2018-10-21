import React, { Component } from 'react'
import  { ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, Bar, Tooltip, Scatter } from 'recharts'
import { Popover, Slider, Radio, Menu, Dropdown, Icon, Avatar, Select } from 'antd'

// TODO:
// 1) "this" and show tooltip over phantom_sevens bar

class RollChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rollSource: props.dice_rolls,
      currentRoll: props.dice_rolls.length,
      phantomSevens: props.phantom_sevens
    }
  }

  numberRange(start, end) {
    return new Array(end - start).fill().map((d, i) => i + start);
  }

  rollData() {
    let rollData = []
    rollData.push({number: 2, expected: this.state.currentRoll * (1/36) })
    rollData.push({number: 3, expected: this.state.currentRoll * (2/36) })
    rollData.push({number: 4, expected: this.state.currentRoll * (3/36) })
    rollData.push({number: 5, expected: this.state.currentRoll * (4/36) })
    rollData.push({number: 6, expected: this.state.currentRoll * (5/36) })
    rollData.push({number: 7, expected: this.state.currentRoll * (6/36), phantom_sevens: this.state.phantomSevens })
    rollData.push({number: 8, expected: this.state.currentRoll * (5/36) })
    rollData.push({number: 9, expected: this.state.currentRoll * (4/36) })
    rollData.push({number: 10, expected: this.state.currentRoll * (3/36) })
    rollData.push({number: 11, expected: this.state.currentRoll * (2/36) })
    rollData.push({number: 12, expected: this.state.currentRoll * (1/36) })

    rollData.map((r) =>{
      r["actual"] = this.state.rollSource.slice(0, this.state.currentRoll).filter(i => i === r["number"]).length
    })

    return rollData
  }

  onSliderChange = (value) => {
    this.setState({
      currentRoll: value
    })
  }

  setRollSource = (rolls) => {
    if (rolls == "all") {
      this.setState({
        rollSource: this.props.dice_rolls,
        currentRoll: this.props.dice_rolls.length,
        phantomSevens: this.props.phantom_sevens

      })
    } else {
      this.setState({
        rollSource: rolls,
        currentRoll: rolls.length,
        phantomSevens: 0
      })
    }
  }



  render() {
    return (
      <div className="chart">
        <ResponsiveContainer width="99%" aspect={1.25}>
          <ComposedChart data={this.rollData()} margin={{ top: 5, right: 5, left: -35, bottom: -10 }}>
            <XAxis dataKey="number" interval={0} />
            <YAxis domain={[0, dataMax => (Math.max(16, dataMax))]} />
            <Bar dataKey="actual" stackId="a" barSize={30} fill="#6495ed" animationDuration={200} />
            <Bar dataKey="phantom_sevens" stackId="a" fill="#d2d2d2" animationBegin={200} animationDuration={400} />
            <Line type="step" dataKey="expected" stroke="none" isAnimationActive={false} dot={{ stroke: "#b72929", strokeWidth: 2 }} />
          </ComposedChart>
        </ResponsiveContainer>

        <span style={{ fontSize: ".75em" }}>View rolls by: </span>


        <Select size={"small"} style={{ width: 120 }} defaultValue="All" onChange={this.setRollSource}>
          <Select.Option value="all">All</Select.Option>
          {this.props.rolls_by_player.map((rbp) => {
            return (
              <Select.Option value={rbp.rolls}> {rbp.name}</Select.Option>
            )
          })}
        </Select>

        <Slider min={1} max={this.state.rollSource.length} defaultValue={this.state.rollSource.length} value={this.state.currentRoll} onChange={this.onSliderChange.bind(this)} style={{ margin: "7px 12px" }} />
      </div>
    )
  }
}

export default RollChart
