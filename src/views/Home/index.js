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
import { Container, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345
  },
  media: {
    //height: 340
  },
  paper: {
    padding: theme.spacing(3),
  },
}));


function Home(props) {

  const classes = useStyles();

  return <div>

    
      <Paper className={classes.paper}>
        <Grid container >

          <Grid lg={12} md={12} xs={12} >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={process.env.PUBLIC_URL + "/images/BeFunky-design.jpg"}
                  title=""
                />

              </CardActionArea>

            </Card>
          </Grid>

          
          <Grid lg={12} md={12} xs={12}><br/></Grid>
          <Grid lg={4} md={4} xs={4} >


            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={process.env.PUBLIC_URL + "/images/promotion1.jpeg"}
                  title=""
                />

              </CardActionArea>

            </Card>
          </Grid>
          <Grid lg={4} md={4} xs={4} >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={process.env.PUBLIC_URL + "/images/promotion2.jpeg"}
                  title=""
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
                  image={process.env.PUBLIC_URL + "/images/promotion3.jpeg"}
                  title=""
                />

              </CardActionArea>

            </Card>
          </Grid>
        </Grid>
      </Paper>
    
  </div>;
}

export default Home;
