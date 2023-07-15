import React from 'react';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from 'recharts';

const CourseProgress = () => {
  const data = [
    { id: 1, progress: 0 },
    { id: 2, progress: 0 },
    { id: 3, progress: 0 },
    { id: 4, progress: 0 },
  ]; // Progress data for each checkpoint

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="id" hide />
        <YAxis hide />
        <Line
          type="step"
          dataKey="progress"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ r: 5, stroke: 'black', fill: 'none' }}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CourseProgress;
