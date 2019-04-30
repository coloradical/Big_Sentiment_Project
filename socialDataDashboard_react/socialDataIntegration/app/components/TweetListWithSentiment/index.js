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
import twitterimg from './twitter.png';
import redditimg from './reddit.png';
const styles = theme => ({
  root: {
    width: 800,
    maxHeight: 480,
    padding:10,
    backgroundColor: theme.palette.background.paper,
    overflow: "scroll"
  }
});


function TweetListWithSentiment(props) {
  const { classes } = props;
  console.log(props.topicTweet);
  return (
    <div>
      <center>
        <Typography variant="overline" gutterBottom>
          How the world sees it
        </Typography>
      </center>
      <Card className={classes.card}>

        <List className={classes.root}>
          {props.topicTweet && props.topicTweet.length > 0 ? props.topicTweet.map((info) =>
            {
              console.log(info._source.sentiment);
              return ((<ListItem key={info._id} style={{ backgroundColor: ((info._source.sentiment === -1) ? '#ff7a7a': ((info._source.sentiment === 0) ? '#d7e3f7': '#a4ff79'))}}>
              {info._source.source == "twitter" ? <img src={twitterimg} height="25" width="25" /> : <img src={redditimg} height="25" width="25" />}
              <ListItemText primary={`${info._source.title}`} secondary={`@${info._source.author}`} />
            </ListItem>
            ));
            }) : console.log('No info to display')}
        </List>
      </Card>
    </div>
  );
}

TweetListWithSentiment.propTypes = {
  classes: PropTypes.object.isRequired,
  topicTweet: PropTypes.array,

};

export default withStyles(styles)(TweetListWithSentiment);
