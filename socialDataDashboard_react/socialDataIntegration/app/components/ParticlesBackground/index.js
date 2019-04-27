/**
 *
 * ParticlesBackground
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Particles from 'react-particles-js';

/* eslint-disable react/prefer-stateless-function */
class ParticlesBackground extends React.PureComponent {
  render() {
    return (
      <div>
        <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 260,
                        "density": {
                            "enable": true,
                            "value_area": 1000
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.05
                    },
                    "move": {
                        "direction": "center",
                        "speed": 1
                    },
                    "size": {
                        "value": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 8,
                            "opacity_min": 0.1
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                },
                
                
            }} />
      </div>
    );
  }
}

ParticlesBackground.propTypes = {};

export default ParticlesBackground;
