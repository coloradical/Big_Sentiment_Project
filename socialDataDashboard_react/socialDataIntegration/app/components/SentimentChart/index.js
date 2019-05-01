import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

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

const COLORS = ['#e74c3c', '#7f8c8d', '#27ae60'];
const NAME = ['Negative', 'Neutral', 'Positive'];
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
    console.log(this.props.sentimentInfo);
    return (
      <div style={{ width: '100%', height: 370 }} align="center">
        <Typography variant="overline" gutterBottom>
          How people feel
            </Typography>
        <ResponsiveContainer>
          <PieChart width={1200} height={500}>
            <Pie
              data={this.props.sentimentInfo}
              // cx={200}
              // cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              // outerRadius={120}
              fill="#27ae60"
              dataKey="doc_count"
            >
              {data.map((entry, index) => (
                <Cell
                  key={NAME[index]}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

          </PieChart>
        </ResponsiveContainer>

      </div>
    );
  }
}
SentimentChart.propTypes = {
  sentimentInfo: PropTypes.array,
}