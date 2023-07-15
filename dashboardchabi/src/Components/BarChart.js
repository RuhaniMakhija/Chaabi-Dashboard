// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle
} from "recharts";

const data = [
  {
    name: "3 Jun",
    num:0,
    uv: 100,
    pv: 100,
    amt: 500
  },
  {
    name: "4 Jun",
    num:100,
    uv: 3000,
    pv: 150,
    amt: 2210
  },
  {
    name: "5 Jun",
    num:200,
    uv: 2000,
    pv: 150,
    amt: 2290
  },
  {
    name: "6 Jun",
    num:300,
    uv: 2780,
    pv: 210,
    amt: 2000
  },
  {
    name: "7 Jun",
    num:400,
    uv: 1890,
    pv: 280,
    amt: 2181
  },
  {
    name: "8 Jun",
    uv: 2390,
    pv: 200,
    amt: 2500
  },
  {
    name: "9 Jun",
    num:0,
    uv: 3490,
    pv: 230,
    amt: 2100
  },
  {
    name: "10 Jun",
    uv: 3490,
    pv: 100,
    amt: 2100
  },
  {
    name: "11 Jun",
    uv: 3490,
    pv: 250,
    amt: 2100
  },
  {
    name: "12 Jun",
    uv: 3490,
    pv: 310,
    amt: 2100
  },
  {
    name: "13 Jun",
    uv: 3490,
    pv: 370,
    amt: 2100
  },
  {
    name: "14 Jun",
    uv: 3490,
    pv: 400,
    amt: 2100
  }
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


const barChart = () => {
  return (
    
    
    <BarChart
    
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      
      barSize={14}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 0 }}  />
      <YAxis dataKey="num" padding={{ top: 20, bottom: 0 }} />
      <Tooltip />
      
      <Bar dataKey="pv" fill="#387EFF" background={{ fill: "#E7EFFF" }} shape={<RoundedBar />}  dot={false}/>
      <style>
        {`
          .recharts-cartesian-axis-line {
            display: none;
          },
        `}
      </style>
      
    </BarChart>
   
  )
}

export default barChart

