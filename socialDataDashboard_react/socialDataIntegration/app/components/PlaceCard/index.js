/**
 *
 * PersonCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import twitterimg from './twitter.png';
import websiteimg from './website.png';
import locationimg from './location.png';
import followersimg from './followers.png';
import GooglePhotos from '../../components/GooglePhotos';

<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
  crossorigin="anonymous"
/>;

const styles = {
  card: {
    maxWidth: 700,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: 280,
    width: 700,
  },
  h3: {
    padding: 500,
  },
};

function PlaceCard(props) {


  const { classes } = props;
  return (
    <div className={classes.root}>

      <Card className={classes.card}>
        <CardActionArea>
          <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.topicInfo.name}&size=4000x300&maptype=roadmap
&key=AIzaSyCz844Jpfn6VIw3udOFBmpOJkkP-LR1XY4`} />
          {/* <GooglePhotos imageSearch={props.imageSearch} /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.topicInfo.name}
            </Typography>
            <Typography component="p">{props.topicInfo.description}</Typography>

            {props.twitterInfo ? <Typography component="p"> <br></br><img src={locationimg} height="20" width="20" /><a href={`https://www.google.com/maps/place/${props.twitterInfo.location}`} target="_blank"> {props.twitterInfo.location} </a></Typography> : console.log("No url")}
            {props.topicInfo && props.topicInfo.url ? <Typography component="p"><img src={websiteimg} height="20" width="20" /><a href={props.topicInfo.url} target="_blank">  Official Website</a></Typography> : console.log("No url")}


            {props.twitterInfo ? <Typography component="p"><img src={twitterimg} height="22" width="22" /><a href={`https://twitter.com/@${props.twitterInfo.screen_name}`} target="_blank">@{props.twitterInfo.screen_name}</a></Typography> : console.log("No url")}
            {props.twitterInfo ? <Typography component="p"><img src={followersimg} height="20" width="20" /><a href={`https://twitter.com/@${props.twitterInfo.screen_name}`} target="_blank"> {props.twitterInfo.followers_count > 1000000 ? `${(props.twitterInfo.followers_count / 1000000).toFixed(1)}M` : props.twitterInfo.followers_count} Followers</a></Typography> : console.log("No url")}

          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>

    </div>
  );
}

PlaceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  topicInfo: PropTypes.object,
  twitterInfo: PropTypes.object,
  imageSearch: PropTypes.array,
};

export default withStyles(styles)(PlaceCard);
