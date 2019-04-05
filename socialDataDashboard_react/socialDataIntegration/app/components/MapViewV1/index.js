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
import geographyObject from "./testLATLONG.json";
import twitterImg from "images/Twitter_Bird.png";
import { scaleLinear } from "d3-scale";
/* eslint-disable react/prefer-stateless-function */

const colorScale = scaleLinear()
  .domain([0, 10000, 100000]) // Max is based on China
  .range(["#F4B4C3", "#E75A7C", "#692939"]);

const mapCenter = [-20,-20] //positions map to excluce antarctica 

class MapViewV1 extends React.PureComponent {
  render() {
    return <div className="container-fluid">
      <ComposableMap 
          style={{width:"100%", height: "auto"}}
        >
        <ZoomableGroup 
            center = {[-mapCenter[0], -mapCenter[1]]}
        >
          <Geographies geography={mapInfo} disableOptimization>
            {(geographies, projection) => geographies.map((geography,i) => (
              <Geography
                key={i}
                
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
            {geographyObject.map((position, index) => (
              <Marker marker={{ coordinates: [position.longitude, position.latitude] }} style={{
                default: { fill: "#ed121d" },
                hover: { fill: "#999" },
                pressed: { fill: "#000" },
              }}>
                <image href={twitterImg} width={'3%'} height={'3%'}/>
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    </div>;
  }
} 

MapViewV1.propTypes = {};

export default MapViewV1;
