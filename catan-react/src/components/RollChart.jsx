import React, { Component } from 'react'
import  { ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, Bar, Tooltip } from 'recharts'

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

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart width={500} height={400} data={rollData(dice_rolls)}>
          <XAxis dataKey="number" />
          <YAxis />
          <Bar dataKey="actual" stackId="a" barSize={30} fill="#8884d8" />
          <Bar dataKey="phantom_sevens" stackId="a" fill="#82ca9d" />
          <Line type="step" dataKey="expected" />

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )

}

export default RollChart
