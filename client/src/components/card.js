import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactGa from "react-ga"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow:"0px 0px 6px -1px rgba(0,0,0,0.75)",
  },
});

export default function CCard(props) {
  useEffect(()=>{
      ReactGa.initialize("UA-170992543-1")
      ReactGa.pageview("/")
  },[])
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          height="300"
          style={{   backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",}}
          image={process.env.PUBLIC_URL+props.pic}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
  {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
