import React from 'react'
import  { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const ResourceChart = ({expected_resources}) => {
  return (
    <div className="chart resource-chart">
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart outerRadius={160} data={expected_resources}>
          <PolarGrid />
          <PolarAngleAxis dataKey="resource_name" />
          <PolarRadiusAxis />

          <Radar name="Expected resources" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ResourceChart
