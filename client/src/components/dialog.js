import React,{useState,useEffect,createRef} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Typography,Card} from '@material-ui/core';
import axios from "axios";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {


  const[a,an]=useState([])
  const[flag,setflag]=useState([])
    

  useEffect(()=>{
      axios.get("https://corona.lmao.ninja/v2/countries")
      .then(promise=>{
           an(promise.data[props.select]);
           setflag(promise.data[props.select].countryInfo)
      })
       .catch(error=>{
           console.log(error)
       })
  },[props.select])
//  console.log(flag.flag)
return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        {a.country}
                </DialogTitle>
        <DialogContent dividers>
        <img 
      src={flag.flag}
      title={a.country}
      />
          <Typography gutterBottom>
            
                      <b>continent:</b>  {a.continent}<br/>
                      <b>active:</b> {a.active}<br/>
                      <b>Deaths:</b> {a.deaths}<br/>
                      <b>recovered:</b> {a.recovered}<br/>
                      <b>Cases:</b> {a.cases}<br/>
                      <b>population:</b> {a.population}<br/>
                      <b>todayCases:</b> {a.todayCases}<br/>
                      <b>todayDeaths:</b> {a.todayDeaths}<br/>
           
           
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
//{a[parseInt(props.select)].country}
