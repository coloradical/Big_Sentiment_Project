/**
 *
 * BarGraph
 *
 */

import React from 'react';
import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class BarGraph extends React.PureComponent {
  render() {
    //var data = [4, 8, 15, 16, 20, 42];
    var barHeight = 20;
    var keyArray = Object.keys(this.props.data);
    var valueArray = Object.values(this.props.data);
    var height = barHeight * keyArray.length;
    var width = 100;
    const x = scaleLinear()
      .domain([0, max(valueArray)])
      .range([0, width]);
    return (
      <div>
        <svg className="chart" viewBox='-25 -25 200 200'>
          {valueArray.map((d, i) => {
              return (
            <g key={i} transform={`translate(0, ${i * barHeight})`}>
              <rect width={x(d)} height={barHeight - 1}>
                <title>{keyArray[i]}</title>
              </rect>
              <text x={x(d) + 10} y={barHeight / 2} font-size="0.5em" dy=".45em">{d}</text>
            </g>
          )})}
          <text x={10} y={height+10} font-size="0.5em" dy=".45em">{this.props.xtitleText}</text>
        </svg>
      </div>
    );
  }
}

BarGraph.propTypes = {
  data: PropTypes.object,
  ytitleText: PropTypes.string,
  xtitleText: PropTypes.string,
};

export default BarGraph;
