/**
 *
 * Trends
 *
 */
import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default class Trends extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/'

  render() {
    return (
      <div>
        <center>
          <Typography variant="overline" gutterBottom>
            How is this trending
            </Typography>

          <LineChart width={1600} height={300} data={this.props.topicAggregate}>
            <Line type="monotone" dataKey="doc_count" name={'count'} stroke="#2980b9" strokeWidth={3} />
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Legend />
            <XAxis dataKey="key_as_string" />
            <YAxis />
          </LineChart>
        </center>
      </div>
    );
  }
}

Trends.propTypes = {
  topicAggregate: PropTypes.object,
};

