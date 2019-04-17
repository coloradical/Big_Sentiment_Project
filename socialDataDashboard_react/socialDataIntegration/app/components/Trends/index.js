/**
 *
 * Trends
 *
 */
import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page H', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'Page I', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'Page J', uv: 3490, pv: 4300, amt: 2100,
  }, {
    name: 'Page K', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Trends extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';

  render() {
    return (
      <div>
        <center>
          <Typography variant="overline" gutterBottom>
            How is this trending
            </Typography>

          <LineChart width={1600} height={100} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            <Tooltip />
          </LineChart>
        </center>
      </div>
    );
  }
}
