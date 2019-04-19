/**
 *
 * SimpleGlobe
 *
 */


// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import mapInfo from "../../../mapInfo.json";
import React from "react";
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps"
import twitterImg from "images/Twitter_Bird.png";


const mapStyles = {
  width: "90%",
  margin: "0 auto",
  display: "block",
  height: "auto"
}



const markers = [
  { coordinates: [3.3792, 6.5244] },
  { coordinates: [139.6917, 35.6895] },
  { coordinates: [-74.0721, 4.711] },
  { coordinates: [-118.2437, 34.0522] }
]
// Heres where we can put the markers from the tweets latitude and longitude 

const SimpleGlobe = () => (
  <div style={{ width: "80%" }}>
    <ComposableMap
      width={500}
      height={500}
      projection="orthographic"
      projectionConfig={{ scale: 220 }}
      style={mapStyles}
    >
      <ZoomableGlobe center={[-54,20]}>
        
        <circle cx={250} cy={250} r={220} fill="transparent" stroke="#CFD8DC" />
        
        <Geographies
          disableOptimization
          geography={mapInfo}
        >
          {(geos, proj) =>
            geos.map((geo, i) => (
              <Geography
                key={geo.id + i}
                geography={geo}
                projection={proj}
                style={{
                  default: {
                    fill: "#CFD8DC",
                  },
                }}
              />
            ))
          }
        </Geographies>
        <Markers>
          {markers.map(marker => (
            <Marker
              marker={marker}
              style={{
                hidden: { display: "none" }
              }}
            >
              
              <image href={twitterImg} width={'3%'} height={'3%'}/>
            </Marker>
          ))}
        </Markers>
      </ZoomableGlobe>
    </ComposableMap>
  </div>
)


export default SimpleGlobe;
