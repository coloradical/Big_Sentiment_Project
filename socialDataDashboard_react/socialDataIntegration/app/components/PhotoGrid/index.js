/**
 *
 * PhotoGrid
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});


function PhotoGrid(props) {
  const { classes } = props;
  return (
    <div>

      <Typography variant="overline" gutterBottom>
        Trending Images
            </Typography>
      <Card className={classes.card}>
        <div className={classes.root}>
          <GridList cellHeight={500} spacing={2} className={classes.gridList} cols={2}>
            {props.topicImage && props.topicImage.length > 0 ? props.topicImage.map(tile => (
              <GridListTile key={tile._id} >
                <a href={tile._source.media_url}><img src={tile._source.media_url} alt={tile._source.media_url} /></a>
                <GridListTileBar
                  title={`Upvotes ⬆ ️: ${tile._source.upvotes}`}
                  titlePosition="bottom"
                  // actionIcon={
                  //   <IconButton className={classes.icon}>
                  //     <StarBorderIcon />
                  //   </IconButton>
                  // }
                  actionPosition="left"
                  className={classes.titleBar}
                />
              </GridListTile>
            )) : console.log('No info to display')}
          </GridList>
        </div>
      </Card>

    </div >
  );
}

PhotoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  topicImage: PropTypes.array,
};

export default withStyles(styles)(PhotoGrid);