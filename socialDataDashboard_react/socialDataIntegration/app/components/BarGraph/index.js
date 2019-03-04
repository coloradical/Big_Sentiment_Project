/**
 *
 * BarGraph
 *
 */

import React from 'react';
import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class BarGraph extends React.PureComponent {
  render() {
    var data = [4, 8, 15, 16, 20, 42];
    var barHeight = 20;
    var height = barHeight * data.length;
    var width = 150;
    const x = scaleLinear()
      .domain([0, max(data)])
      .range([0, width]);
    return (
      <div>
        <svg className="chart" viewBox='0 0 200 200'>
          {data.map((d, i) => (
            <g key={i} transform={`translate(0, ${i * barHeight})`}>
              <rect width={x(d)} height={barHeight - 1} />
              <text x={x(d) + 10} y={barHeight / 2} dy=".45em">{d}</text>
            </g>
          ))}
        </svg>
      </div>
    );
  }
}

BarGraph.propTypes = {};

export default BarGraph;
