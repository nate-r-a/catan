import React from 'react'
import  { ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, Bar, Tooltip } from 'recharts'
import { Popover, Slider } from 'antd'

// TODO: Convert this to smart container to be able to handle:
// 1) "this" and show tooltip over phantom_sevens bar
// 2) slider for dice roll history
const RollChart = ({dice_rolls}) => {
  function numberRange(start, end) {
    return new Array(end - start).fill().map((d, i) => i + start);
  }

  function organizeRollData(dice_rolls) {
    let numberOfRolls = []
    numberRange(2,13).map((number) => {
      let rolls
      rolls = {number: number, actual: dice_rolls.filter(i => i === number).length}
      if (number == 7) {
        rolls["phantom_sevens"] = 2
      }
      numberOfRolls.push(rolls)
    })

    return numberOfRolls
  }

  function rollData(dice_rolls) {
    let length = dice_rolls.length
    let rollData = []
    rollData.push({number: 2, expected: length * (1/36) })
    rollData.push({number: 3, expected: length * (2/36) })
    rollData.push({number: 4, expected: length * (3/36) })
    rollData.push({number: 5, expected: length * (4/36) })
    rollData.push({number: 6, expected: length * (5/36) })
    rollData.push({number: 7, expected: length * (6/36), phantom_sevens: 2 })
    rollData.push({number: 8, expected: length * (5/36) })
    rollData.push({number: 9, expected: length * (4/36) })
    rollData.push({number: 10, expected: length * (3/36) })
    rollData.push({number: 11, expected: length * (2/36) })
    rollData.push({number: 12, expected: length * (1/36) })

    rollData.map((r) =>{
      r["actual"] = dice_rolls.filter(i => i === r["number"]).length
    })

    return rollData
  }

  function showTooltip(bar) {
    console.log(bar)
  }

  return (
    <div className="chart">
      <ResponsiveContainer width="99%" aspect={1}>
        <ComposedChart data={rollData(dice_rolls)} margin={{ top: 5, right: 5, left: -35, bottom: -10 }}>
          <XAxis dataKey="number" interval={0} />
          <YAxis />
          <Bar dataKey="actual" stackId="a" barSize={30} fill="#6495ed" />
          <Bar dataKey="phantom_sevens" stackId="a" fill="#d2d2d2" id="p7s" onMouseOver={showTooltip.bind(null, this)} />
          <Line type="step" dataKey="expected" stroke="#fff0" dot={{ stroke: "#b72929", strokeWidth: 2 }} />
        </ComposedChart>
      </ResponsiveContainer>
      <Slider min={1} max={dice_rolls.length} />
    </div>
  )

}

export default RollChart
