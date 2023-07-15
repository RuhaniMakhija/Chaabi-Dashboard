import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'passed', value: 500 },
    { name: 'failed', value: 300 },
  ];

const COLORS = ['#008E43', '#ED1C24'];
const pieChart = () => {
  return (
    <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={120}
      cy={200}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={0}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    </PieChart>
  )
}

export default pieChart
