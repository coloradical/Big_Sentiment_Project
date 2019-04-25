import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
} from 'recharts';
const data = [
  { name: 'Positive', value: 1000 },
  { name: 'Negative', value: 400 },
];

console.log(sentimentInfo)

const COLORS = ['#27ae60', '#e74c3c'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class SentimentChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <div style={{ width: '100%', height: 370 }} align="center">
         <Typography variant="overline" gutterBottom>
          How people feel
            </Typography>
        <ResponsiveContainer>
          <PieChart width={1200} height={500}>
            <Pie
              data={data}
              // cx={200}
              // cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              // outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
     
      </div>
    );
  }
}

Trends.propTypes = {
  sentimentInfo: PropTypes.object, 
};
//twenty first 
