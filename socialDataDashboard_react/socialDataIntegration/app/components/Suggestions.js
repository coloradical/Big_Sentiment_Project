import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';

const Suggestions = (props) => {
  const options = props.results.map(r => (
        <li key={r} style={{ fontWeight: 500 }}>{r}</li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions