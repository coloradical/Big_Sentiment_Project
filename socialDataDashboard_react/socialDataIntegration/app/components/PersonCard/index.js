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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>

const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: 200,
    width:200
  },
  h3: {
    padding:500,
  },
};

// function PersonCard(props) {
//   const { classes } = props;
//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           className={classes.media}
//           height="140"
//           image={props.topicInfo.image.contentUrl}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.topicInfo.name}
//           </Typography>
//           <Typography component="p">
//             {props.topicInfo.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }


function PersonCard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>


      <Grid item sm={12}>
      <Typography variant="h4" align="center" gutterBottom><i class="fab fa-twitter"></i></Typography>
      <Typography variant="overline" align="center" gutterBottom>"No one is born hating another person because of the color of his skin or his background or his religion..."</Typography>
       
        </Grid>

      <Grid item sm={4}>
          
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={props.topicInfo.image.contentUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.topicInfo.name}
          </Typography>
          <Typography component="p">
            {props.topicInfo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  
        </Grid>
        
        

      </Grid>
    </div>
  );
}

PersonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  topicInfo: PropTypes.object
};

export default withStyles(styles)(PersonCard);