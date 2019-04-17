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

const styles = theme => ({
  root: {
    width: '100%',
    maxHeight: 300,
    backgroundColor: theme.palette.background.paper,
    overflow: "scroll"
  },

});

function TweetList(props) {
  const { classes } = props;
  var TweetText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo ultricies blandit. Vestibulum faucibus luctus suscipit."
  var Author = "@SomeRandomAuthor"
  return (
    <div>
      <center>
        <Typography variant="overline" gutterBottom>
          What's the world talking about
            </Typography>
      </center>
      <Card className={classes.card}>

        <List className={classes.root}>
          <ListItem>
            <i className="fab fa-twitter" style={{ color: '#2980b9' }} /><ListItemText primary={`Definition of bullshit: A campus police chief placed on administrative leave for liking Donald Trump and NRA tweets.`} secondary={`@kylegriffin1`} />
          </ListItem>
          <ListItem>
            <i className="fab fa-twitter" style={{ color: '#2980b9' }} /><ListItemText primary={`During his first month in office, Donald Trump spent an estimated 18 hours on tweets.`} secondary={`@WhatTheFFacts`} />
          </ListItem>
          <ListItem>
            <i className="fab fa-twitter" style={{ color: '#2980b9' }} /><ListItemText primary={`Nancy Pelosi: "With all due respect to the social media and that, that the president's tweets have cheapened the presidency ... he's just being a freak, I mean, he's just terrible.`} secondary="@WhatTheFFacts" />
          </ListItem>
          <ListItem>
            <i className="fab fa-twitter" style={{ color: '#2980b9' }} /><ListItemText primary={`I'm pretty sure Kellyanne and George sit at home planning the inane, contrived, tweets they'll post from Trump's account each day. Not only is it obviously not him, but they are fake and a joke intentionally.`} secondary={`@Moniorti`} />
          </ListItem>
          <ListItem>
            <i className="fab fa-twitter" style={{ color: '#2980b9' }} /><ListItemText primary={TweetText} secondary={Author} />
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

TweetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TweetList);
