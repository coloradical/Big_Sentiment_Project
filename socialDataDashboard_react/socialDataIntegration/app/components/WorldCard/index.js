/**
 *
 * WorldCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../images/map.jpg';
import { repoLoadingError } from '../../containers/HomePage/actions';

const styles = {
  card: {
    maxWidth: 1300,
    height: 800,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
     height: 700,
     width:'100%',

  },
};


function WorldCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="World Map"
          className={classes.media}
          height="140"
          image={logo}
          title="World Map"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            World Map Placeholder
          </Typography>
          <Typography component="p">
        This can be replaced by the tweets on a map module once it's 
          </Typography>
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
  );
}

WorldCard.propTypes = { classes: PropTypes.object.isRequired,};

export default withStyles(styles)(WorldCard);
