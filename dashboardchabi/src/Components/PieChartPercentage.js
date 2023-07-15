import React from 'react'
// import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 22 },
  { name: 'Group B', value: 34 },
  { name: 'Group C', value: 22 },
  { name: 'Group D', value: 7 },
  { name: 'Group D', value: 20 },
];



const COLORS = ['#D2D2D2', '#B4CEFF', '#D2D2D2', '#D2D2D2', '#D2D2D2'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartPercentage = () => {
  return (
    
    <PieChart width={300} height={300} viewBox="0 0 200 200">
      <Pie
      viewBox="200 100 200 400"
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        style={{ border: '1px solid black' }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ border: '1px solid black' }}/>
        ))}
        
      </Pie>
      
    </PieChart>
  )
}

export default PieChartPercentage
