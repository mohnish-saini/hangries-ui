import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import pic from "../../images/promotion1.jpeg";

const useStyles = makeStyles({
  root: {
    //maxWidth: 345
  },
  media: {
    //height: 140
  }
});


function Home(props) {

  const classes = useStyles();

  return <div>
  <Grid container>
  <Grid lg={4} md={4} xs={4}>
  

  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
      component="img"
        className={classes.media}
        image={process.env.PUBLIC_URL+"/images/promotion1.jpeg"}
        title="Contemplative Reptile"
      />
      
    </CardActionArea>
   
  </Card>
  </Grid>
  <Grid lg={4} md={4} xs={4}>
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
         component="img"
         className={classes.media}
         image={process.env.PUBLIC_URL+"/images/promotion2.jpeg"}
         title="Contemplative Reptile"
      />
      
    </CardActionArea>
    
  </Card>
  </Grid>

  <Grid lg={4} md={4} xs={4}>
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        className={classes.media}
        image={process.env.PUBLIC_URL+"/images/promotion3.jpeg"}
        title="Contemplative Reptile"
      />
      
    </CardActionArea>
    
  </Card>
  </Grid>
</Grid>
</div>;
}

export default Home;
