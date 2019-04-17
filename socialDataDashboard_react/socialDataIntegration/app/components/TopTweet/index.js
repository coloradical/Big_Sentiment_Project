/**
 *
 * TopTweet
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TopTweet() {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        <i className="fab fa-twitter" />
      </Typography>
      <Typography variant="overline" align="center" gutterBottom>
        {"No one is born hating another person because of the color of his skin or his background or his religion..."}
      </Typography>
    </div>
  );
}

TopTweet.propTypes = {};

export default TopTweet;
