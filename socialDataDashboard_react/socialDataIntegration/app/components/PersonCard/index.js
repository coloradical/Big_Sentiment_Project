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
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography';

<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
  crossorigin="anonymous"
/>;

const styles = {
  card: {
    maxWidth: 280,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: 280,
    width: 280,
  },
  h3: {
    padding: 500,
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
  console.log(props.topicInfo);
  return (
    <div className={classes.root}>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Person"
            className={classes.media}
            image={props.topicInfo.image.contentUrl}
            title="Person"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.topicInfo.name}
            </Typography>
            <Typography component="p">{props.topicInfo.description}</Typography>
            {props.topicInfo.url ? <Typography component="p"><a href={props.topicInfo.url} target="_blank">Official Website</a></Typography> : console.log("No url")}
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

PersonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  topicInfo: PropTypes.object,
};

export default withStyles(styles)(PersonCard);
