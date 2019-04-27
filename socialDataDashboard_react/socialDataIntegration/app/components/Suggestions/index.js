/**
 *
 * Suggestions
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
// import styled from 'styled-components';

function Suggestions(props) {
  const options = props.results.map(r => (
    <MenuItem key={r} style={{ fontWeight: 500,  background: 'oldlace', borderBottom: 'black', width: '100%' }} onClick={() => props.onSuggestionSelection(r)}>{r}</MenuItem>
));
  return <div><MenuList style={{ }}>{options}</MenuList></div>;
}
Suggestions.propTypes = {
  results: PropTypes.array,
  onSuggestionSelection: PropTypes.func,
};

export default Suggestions;
