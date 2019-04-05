/**
 *
 * TopicPalette
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from '@material-ui/core/Button';


/* eslint-disable react/prefer-stateless-function */
class TopicPalette extends React.PureComponent {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
        Primary
        </Button>
      </div>
    );
  }
}

TopicPalette.propTypes = {};

export default TopicPalette;
