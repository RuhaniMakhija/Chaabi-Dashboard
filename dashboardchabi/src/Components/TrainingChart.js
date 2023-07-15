import React from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle} from 'recharts';

const data = [
  {
    name: 'S',
    num:0,
    uv: 4000,
    pv: 38,
    amt: 2400,
  },
  {
    name: 'M',
    num:40,
    uv: 3000,
    pv: 43,
    amt: 2210,
  },
  {
    name: 'T',
    num:80,
    uv: 2000,
    pv: 38,
    amt: 2290,
  },
  {
    name: 'W',
    num:100,
    uv: 2780,
    pv: 45,
    amt: 2000,
  },
  {
    name: ' T',
    uv: 1890,
    pv: 40,
    amt: 2181,
  },
  {
    name: ' F',
    uv: 2390,
    pv: 45,
    amt: 2500,
  },
  {
    name: ' S',
    uv: 3490,
    pv: 70,
    amt: 2100,
  },
];


const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;
  
    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        radius={[10, 10, 10, 10]}
      />
    );
  };

const TrainingChart = () => {
  return (
    <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={15}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis dataKey="num" />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Bar dataKey="pv" fill="#387EFF" background={{ fill: '#E7EFFF' }} shape={<RoundedBar />} />
        </BarChart>
  )
}

export default TrainingChart
