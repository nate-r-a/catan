import React, { Component } from 'react'
import  { ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, Bar, Tooltip, Scatter } from 'recharts'
import { Popover, Slider } from 'antd'

// TODO:
// 1) "this" and show tooltip over phantom_sevens bar
// 2) Replace Line with Scatter?

class RollChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoll: props.dice_rolls.length
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
    rollData.push({number: 7, expected: this.state.currentRoll * (6/36), phantom_sevens: 2 })
    rollData.push({number: 8, expected: this.state.currentRoll * (5/36) })
    rollData.push({number: 9, expected: this.state.currentRoll * (4/36) })
    rollData.push({number: 10, expected: this.state.currentRoll * (3/36) })
    rollData.push({number: 11, expected: this.state.currentRoll * (2/36) })
    rollData.push({number: 12, expected: this.state.currentRoll * (1/36) })

    rollData.map((r) =>{
      r["actual"] = this.props.dice_rolls.slice(0, this.state.currentRoll).filter(i => i === r["number"]).length
    })

    return rollData
  }

  onSliderChange = (value) => {
    this.setState({
      currentRoll: value
    })
  }

  render() {
    return (
      <div className="chart">
        <ResponsiveContainer width="99%" aspect={1}>
          <ComposedChart data={this.rollData()} margin={{ top: 5, right: 5, left: -35, bottom: -10 }}>
            <XAxis dataKey="number" interval={0} />
            <YAxis />
            <Bar dataKey="actual" stackId="a" barSize={30} fill="#6495ed" animationDuration={300} />
            <Bar dataKey="phantom_sevens" stackId="a" fill="#d2d2d2" animationBegin={300} animationDuration={400} />
            <Line type="step" dataKey="expected" stroke="none" isAnimationActive={false} dot={{ stroke: "#b72929", strokeWidth: 2 }} />
          </ComposedChart>
        </ResponsiveContainer>
        <Slider min={1} max={this.props.dice_rolls.length} defaultValue={this.props.dice_rolls.length} onChange={this.onSliderChange} />
      </div>
    )
  }
}

export default RollChart
