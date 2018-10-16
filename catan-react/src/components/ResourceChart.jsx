import React from 'react'
import  { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

const ResourceChart = ({expected_resources}) => {
  return (
    <div className="chart resource-chart">
      <ResponsiveContainer width="99%" aspect={1}>
        <RadarChart outerRadius="80%" data={expected_resources} cy="55%" margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="resource_name" />
          <Radar name="Expected resources" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} animationDuration={1000}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ResourceChart
