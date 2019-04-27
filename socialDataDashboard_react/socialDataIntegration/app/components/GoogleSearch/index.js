/**
 *
 * TweetList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import googleimg from './google.png';

const styles = theme => ({
  root: {
    width: 800,
    maxHeight: 480,
    padding: 10,
    backgroundColor: theme.palette.background.paper,
    overflow: "scroll"
  },

});


function GoogleSearch(props) {
  const { classes } = props;
  return (
    <div>
      <center>
        <Typography variant="overline" gutterBottom>
          <img src={googleimg} height="25" width="33" /> Top Google Results
        </Typography>
      </center>
      <Card className={classes.card}>

        <List className={classes.root}>
          {props.googleSearch && props.googleSearch.length > 0 ? props.googleSearch.map((info) =>
            (<ListItem key={info.title}>

              <a href={info.link} target='_blank'> <ListItemText primary={`${info.title}`} secondary={info.snippet} /></a>
            </ListItem>
            )) : console.log('No info to display')}
        </List>
      </Card>
    </div>
  );
}

GoogleSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  googleSearch: PropTypes.array,

};

export default withStyles(styles)(GoogleSearch);


