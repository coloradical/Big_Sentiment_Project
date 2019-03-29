/**
 *
 * MapViewV1
 *
 */

import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import mapInfo from "../../../mapInfo.json";
import { scaleLinear } from "d3-scale";
/* eslint-disable react/prefer-stateless-function */

const colorScale = scaleLinear()
  .domain([0, 10000, 100000]) // Max is based on China
  .range(["#F4B4C3", "#E75A7C", "#692939"]);

class MapViewV1 extends React.PureComponent {
  render() {
    return <div className="container-fluid">
      <ComposableMap width={"1200"} height={"600"}>
        <ZoomableGroup zoom={"1.4"} disablePanning={"true"}>
          <Geographies geography={mapInfo} disableOptimization>
            {(geographies, projection) => geographies.map(geography => (
              <Geography
                key={geography.id}
                geography={geography}
                projection={projection}
                style={{
                  default: {
                    fill: colorScale(geography.properties.pop_est),
                    stroke: "#FFF",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: { fill: "#999" }
                }}
              />
            ))}
          </Geographies>
          <Markers>
            <Marker marker={{ coordinates: [8.5, 47.3] }} style={{
              default: { fill: "#ed121d" },
              hover: { fill: "#999" },
              pressed: { fill: "#000" },
            }}>
              <circle cx={0} cy={0} r={5} />
            </Marker>
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    </div>;
  }
}

MapViewV1.propTypes = {};

export default MapViewV1;
