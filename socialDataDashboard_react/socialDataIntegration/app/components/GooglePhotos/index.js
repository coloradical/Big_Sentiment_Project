import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
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
    width: 650,
    height: 350,
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

function GooglePhotos(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <GridList cellHeight={280} cellWidth={280} className={classes.gridList} cols={1}>
          {props.imageSearch.map(tile => (
            <GridListTile key={tile.link}>
              <img src={tile.link} alt={tile.title} />
              <GridListTileBar

                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton>

                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Card>
    </div>
  );
}

GooglePhotos.propTypes = {
  classes: PropTypes.object.isRequired,
  imageSearch: PropTypes.array,
};

export default withStyles(styles)(GooglePhotos);