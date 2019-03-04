/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  return <img className={props.className} src={props.src} alt={props.alt} style={(props.src.length > 0) ? {borderStyle: 'solid', display: 'block', marginLeft: 'auto', marginRight: 'auto'}: {}}/>;
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
