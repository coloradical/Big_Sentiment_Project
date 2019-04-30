/**
 *
 * SimpleGlobe
 *
 */


// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import messages from './messages';
import mapInfo from "../../../mapInfo.json";
import React from "react";
import PropTypes from 'prop-types';
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps"
import twitterImg from "images/Twitter_Bird.png";
import { Button } from '@material-ui/core';


const mapStyles = {
  width: "90%",
  margin: "0 auto",
  display: "block",
  height: "auto"
}

// Heres where we can put the markers from the tweets latitude and longitude 
var markers = [
  { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
  { name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { name: "Bogota", coordinates: [-74.0721, 4.7110] },
  { name: "Quito", coordinates: [-78.4678, -0.1807] },
  { name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { name: "Paramaribo", coordinates: [-55.2038, 5.8520] },
  { name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { name: "Cabo de Santo Agostinho", coordinates: [-60.75811, 133.11883] },
  { name: "Hastings", coordinates: [-21.38065, -121.37871] },
  { name: "Bridlington", coordinates: [2.58894, 42.87223] },
  { name: "Civo", coordinates: [-5.18993, -115.52727] },
  { name: "Assiniboia", coordinates: [-25.8236, -126.99991] },
  { name: "Richmond", coordinates: [-33.85666, 126.18914] },
  { name: "Mission", coordinates: [78.92848, -124.55508] },
  { name: "Córdoba", coordinates: [74.11551, 112.09805] },
  { name: "Amravati", coordinates: [-60.35696, 0.80655] },
  { name: "Kędzierzyn-Koźle", coordinates: [18.4279, -80.43714] },
  { name: "Santiago", coordinates: [-63.14857, -142.06693] },
  { name: "Grande Prairie", coordinates: [71.16128, -171.11557] },
  { name: "Kędzierzyn-Koźle", coordinates: [5.069, -4.30492] },
  { name: "San Sostene", coordinates: [14.14407, 30.74078] },
  { name: "Cambridge", coordinates: [24.35735, 63.7662] },
  { name: "Chiny", coordinates: [-48.34308, -117.64554] },
  { name: "Slijpe", coordinates: [75.2925, -134.06613] },
  { name: "Jambes", coordinates: [59.57076, -160.13174] },
  { name: "Gelsenkirchen", coordinates: [46.06449, -160.90042] },
  { name: "Frankenthal", coordinates: [36.37354, -157.76201] },
  { name: "Petit-Hallet", coordinates: [58.59816, 80.98785] },
  { name: "Ferlach", coordinates: [-31.72164, -56.90219] },
  { name: "Seydişehir", coordinates: [68.2183, 167.85247] },
  { name: "Outrijve", coordinates: [-67.10031, -96.80373] },
  { name: "Lille", coordinates: [55.93844, 73.02063] },
  { name: "Calder", coordinates: [3.76578, -17.54884] },
  { name: "Pescantina", coordinates: [-53.19796, 141.96328] },
  { name: "Heusden-Zolder", coordinates: [30.83505, 55.84936] },
  { name: "Los Angeles", coordinates: [3.0217, -55.93705] },
  { name: "Merbes-le-Chateau", coordinates: [-60.19702, 131.10536] },
  { name: "Merrickville-Wolford", coordinates: [22.22518, -38.4868] },
  { name: "Fresno", coordinates: [-30.0094, 8.45195] },
  { name: "Rudiano", coordinates: [-14.72208, -15.10994] },
  { name: "Joliet", coordinates: [-39.07176, -63.31364] },
  { name: "Hekelgem", coordinates: [-0.76946, 66.23445] },
  { name: "Asti", coordinates: [30.88358, -27.82249] },
  { name: "Malartic", coordinates: [14.71757, -61.95089] },
  { name: "Casanova Elvo", coordinates: [25.98729, -150.62737] },
  { name: "Bloomington", coordinates: [44.13301, 102.98678] },
  { name: "Bernburg", coordinates: [-77.32715, 12.45551] },
  { name: "Denver", coordinates: [-39.7392, 104.9903] },

]
//positive latitude is north of the equator 
//negative latitude is south of the equator 
//var [lat, long] = marker.coordinates;
const shiftY = [-12]
const shiftX = [-12]

// if (markers.coordinates[0]>0) {shiftY == [15]};
// else shiftY == [-35];
// var markers, lat, long;
// lat = markers.coordinates[0];
// long = markers.coordinates[1];
function transformGlobeTags(globeTags) {
  let transformedMarkers = [];
  globeTags.filter((tag) => {
    if (tag['key'] === "Germany") {
      return false;
    }
    return true;
  }).map((tag) => {
    let marker = {};
    let currentTag = tag['by_top_hits']['hits']['hits'][0]['_source'];
    marker['names'] = currentTag['trends'].slice(0, 5);
    marker['coordinates'] = [parseFloat(currentTag['country']['longitude']), parseFloat(currentTag['country']['latitude'])];
    marker['id'] = currentTag['woeid'];
    transformedMarkers.push(marker);
  });
  return transformedMarkers;
}
function SimpleGlobe(props) {
  console.log(props.globeTags);
  //transform globetags to marker schema
  let transformedMarkers = transformGlobeTags(props.globeTags);
  console.log(transformedMarkers);
  return (
    <div style={{ width: "70%" }}>
      <ComposableMap
        width={500}
        height={500}
        projection="orthographic"
        projectionConfig={{ scale: 220 }}
        style={mapStyles}
      >
        <ZoomableGlobe center={[-94, 20]}>

          <circle cx={250} cy={250} r={220} fill="transparent" stroke="white" />

          <Geographies
            disableOptimization
            geography={mapInfo}
          >
            {(geos, proj) =>
              geos.map((geo, i) => (
                <Geography
                  key={i}
                  geography={geo}
                  projection={proj}
                  style={{
                    default: {
                      fill: "#CFD8DC",
                      outline: "none",
                    },
                    pressed: {
                      stroke: '#FFFFFF',
                      outline: "none",
                    },
                    hover: {
                      fill: "#CFD8DC",
                      stroke: "38A1F3",
                      strokeWidth: 0.5,
                      outline: "none",
                    },

                  }}
                />
              ))
            }
          </Geographies>
          <Markers>
            {transformedMarkers.map((marker, i) => {
              return (
                <Marker
                  key={marker['id']}
                  tabable
                  preserveMarkerAspect
                  marker={{ coordinates: marker['coordinates'] }}
                  style={{
                    hidden: { display: "none" }
                  }}
                >
                  {/* <circle cx={0} cy={0} r={6} fill="#FF5722" stroke="#FFF" /> */}
                  {marker.names.map((name, i) => {
                    return ((
                      <text
                        key={i}
                        
                        onClick={() => props.selectHashtag(name)}
                        textAnchor="middle"
                        y={shiftY - i * 8}
                        x={shiftX}
                        style={{
                          fontSize: 10,
                          fontFamily: "Century Gothic",
                          fill: "#ef3469",
                          stroke: "none",
                          cursor: "pointer", 
                          textDecoration: "underline"
                        }}
                      >
                        {`#${name}`}
                      </text>
                    ));
                  }
                  )};
                  }
                    <image href={twitterImg} width={'3%'} height={'3%'} y={shiftY} x={shiftX} />
                </Marker>
                // 
              );
            })}
          </Markers>
        </ZoomableGlobe>
      </ComposableMap>
    </div>
  );
}

SimpleGlobe.propTypes = {
  globeTags: PropTypes.array,
  selectHashtag: PropTypes.func,
};
export default SimpleGlobe;
