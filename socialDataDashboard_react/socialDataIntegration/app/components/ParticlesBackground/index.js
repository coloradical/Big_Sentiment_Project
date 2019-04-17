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
                            "value_area": 2000
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.1
                    },
                    "move": {
                        "direction": "center",
                        "speed": 3
                    },
                    "size": {
                        "value": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
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
