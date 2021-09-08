import React from 'react';
import { Input,
          Grid,
          FormControl,
          Box,
          Button,
          InputBase,
          Typography,
          Slider ,
        Switch ,
        Card } from '@material-ui/core';
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 35,
    height: 17,
    padding: 0,
    marginLeft: theme.spacing(6),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor:"hsl(210deg 92% 57%)",
        borderColor: "hsl(210deg 92% 57%)",
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 15,
    height: 15,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "gray",
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(Switch);
const useStyles = makeStyles((theme) => ({
  CardText:{
    textAlign:"center",
    paddingTop:"30px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    background:"white",  borderStartEndRadius:"0px",
    borderEndEndRadius:"0px",
    height:"32px",
    width: '100%',
  },
  card:{
    marginTop:"520px",
    background:"white",
    height:"200px"
  },
  num:{
    paddingBottom:"20px",
  },
  paper:{
   width:"250px",
    height:"80%",
    borderRadius:"10px",
    marginLeft:"200px",
    marginTop:"130px",
    backgroundColor:"white"

  },
  paper1:{
    width:"300px",
    height:"105%",
    borderRadius:"10px",
    marginLeft:"180px",
    marginTop:"60px",
    backgroundColor:"white"

  },
  paper2:{
    width:"250px",
    height:"70%",
    borderEndEndRadius:"20px",
    borderTopRightRadius:"20px",
    marginLeft:"197px",
    marginTop:"120px",
    backgroundColor:"hsl(210deg 92% 57%)"

  },
  input: {
    width: 42,
    color:"white",
    borderBottom:"1px solid white"
  },
  search:{
    textAlign:"center",
  },
 
  Box:{
    paddingLeft:"400px",
  },
  line:{
    color:"gray",
    paddingLeft:"80px",
    paddingBottom:"12px",
    paddingTop:"0"
  }
}
));
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <Grid container style={{marginRight:"11px"}} >
        <Grid item xs={3} style={{paddingLeft:"0px",marginTop:"5px"}}>
      <ArrowLeftIcon style={{color:"hsl(210deg 92% 57%)"}} />
      </Grid>
      <Grid item xs={3} style={{paddingLeft:"2px",paddingRight:"10px",paddingTop:"5px"}}>
      <ArrowRightIcon style={{ color:"hsl(210deg 92% 57%)"}} />
      </Grid></Grid>
    </span>
  );
}

function App(){
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const [values, setValues] = React.useState(4.99);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setValues(newValue);
      
    
  };

  return(
    <div className={classes.root}>
      <div style={{background:"rgb(222 220 220 / 94%)",height:"450px"}}>
      <div className={classes.search}>
        <h1><b>
          Simple Pricing</b>
        </h1>
      </div>
      <Grid>
      <FormControl >
          <div className={classes.Box}>
            <Box boxShadow={1} >
            <InputBase
              placeholder="Your work email…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            <Button style={{backgroundColor:"#09ca09",color:"white", 
            fontSize:"15px",
            borderBottomLeftRadius:"0px", height:"47px",borderTopLeftRadius:"0px"}}>Get Started Free</Button>
            </Box>
          </div>
        <Typography style={{fontSize:"10px",paddingLeft:"450px",color:"grey",paddingTop:"20px"}}>Free forever version Unlimited Users. Free 12-days trial to test Premium.</Typography>
      </FormControl>
      <div style={{paddingLeft:"350px"}}>
      <Button style={{background:"hsl(281deg 61% 54%)",color:"white",marginTop:"20px",marginLeft:"60px",height:"30px",width:"380px",fontSize:"9px"}}><b>FREE Asana & Jira MIgration!</b><span> Transfer everything in seconds!</span></Button>
      </div>
      </Grid>
      
      <Grid container>
       <Grid item xs={3}>
       <Box boxShadow={9} className={classes.paper}>
            <Typography style={{textAlign:"center",paddingTop:"30px",fontSize:"20px"}}>
           <b> Free</b>
            </Typography>
            <Typography style={{textAlign:"center"}} >
            <Grid container>
           <Grid item xs={3} style={{fontSize:"18px",paddingTop:"23px",paddingLeft:"100px"}}><b>$</b></Grid><Grid style={{fontSize:"50px",paddingLeft:"25px"}}><b>0</b></Grid> </Grid> 
            </Typography>
            <Typography  style={{color:"gray",paddingTop:"1px",fontSize:"13px",textAlign:"center"}}>
          per user/month
            </Typography>
            <Typography style={{textAlign:"center",fontSize:"13px"}}>
           <p><b> Unlimited</b> <span style={{color:"gray"}}>Users</span></p>
            </Typography>
            <Typography style={{textAlign:"center",fontSize:"13px"}}>
            <p><b style={{borderBottom:"1px solid gray",borderBottomStyle:"dashed"}}>Basic</b> <span style={{color:"gray",borderBottom:"1px solid gray",borderBottomStyle:"dashed"}}>Permissions</span></p>
            </Typography>
            <Typography style={{textAlign:"center",fontSize:"13px"}}>
          <p> <b>100 MB </b> <span style={{color:"gray"}}>Total Storage</span></p>
            </Typography>
          </Box>
          </Grid>
          <Grid item xs={3}>
          <Box boxShadow={9} className={classes.paper1}>
            <Typography style={{textAlign:"center",paddingTop:"30px",fontSize:"20px"}}>
           <b> Premium</b>
            </Typography>
            <Typography style={{textAlign:"center"}} >
              <Grid container>
           <Grid item xs={3} style={{fontSize:"18px",paddingTop:"23px",paddingLeft:"100px"}}><b>$</b></Grid><Grid style={{fontSize:"50px",paddingLeft:"25px"}}><b>4</b></Grid><Grid item xs={3} style={{fontSize:"18px",paddingTop:"25px",paddingRight:"30px"}}><b>.99</b></Grid> </Grid> 
            </Typography>
            <Typography  style={{color:"gray",paddingTop:"1px",fontSize:"13px",textAlign:"center"}}>
          per user/month
            </Typography>
            <Typography style={{textAlign:"center",fontSize:"13px"}}>
            <Grid container><Grid item xs={3} style={{paddingLeft:"65px"}}> Monthly</Grid> <Grid item xs={3}> <AntSwitch/></Grid><Grid item xs={3} style={{color:"hsl(210deg 92% 57%)"}}> Yearly</Grid> </Grid>
            </Typography>
            <Typography style={{textAlign:"center",fontSize:"11px",color:"hsl(210deg 92% 57%"}}>
           Saving 20% a year
            </Typography>
           
            <Typography style={{textAlign:"center",fontSize:"13px",marginTop:"40px"}}>
           <p><b style={{borderBottom:"1px solid gray",borderBottomStyle:"dashed"}}> Free Guest</b> <span style={{color:"gray",borderBottom:"1px solid gray",borderBottomStyle:"dashed"}}>Users</span></p>
            </Typography>
            {/* <div style={{paddingLeft:"95px",color:"gray"}}>---------------------</div> */}
            <Grid>
            <Typography style={{textAlign:"center",fontSize:"13px"}}>
            <p ><b style={{borderBottom:"1px solid gray",borderBottomStyle:"dashed"}}>Advanced</b> <span style={{color:"gray",borderBottom:"1px solid gray",borderBottomStyle:"dashed"}}>Permissions</span></p>
            </Typography>
            </Grid>
            <Typography style={{textAlign:"center",fontSize:"13px"}}>
          <p> <b style={{borderBottom:"1px solid gray",borderBottomStyle:"dashed"}}>+10 GB </b> <span style={{color:"gray",borderBottom:"1px solid gray",borderBottomStyle:"dashed"}}>Total Storage</span></p>
            </Typography>
            <Typography style={{textAlign:"center",fontSize:"13px"}}>
          <p> <b>Priority </b> <span style={{color:"gray"}}>Support</span></p>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} >
          <Box boxShadow={9} style={{color:"white",marginRight:"100px"}} className={classes.paper2}>
            <Typography style={{textAlign:"center",paddingTop:"30px",fontSize:"20px"}}>
           <b> Calculate how much</b> <b style={{paddingRight:"70px"}}> you'd spend</b>
            </Typography>
           <Grid container style={{paddingLeft:"30px",lineBreak:"white"}}> 
           <Grid item xs={6}><Typography
            className={classes.input}
            value={value}
            margin="dense"
          >
          {value}
          </Typography>
          </Grid>
          <Grid item xs={6}>
              
            
          <Typography value={value} style={{position:"absolute"}} >
          $ {value * 4.9}
            </Typography>
                        </Grid >
            
            </Grid>
            <Grid container style={{paddingLeft:"30px",lineBreak:"white"}}> 
            <Grid item xs={6}>
            <Typography  style={{color:"white",paddingTop:"1px",fontSize:"9px",paddingRight:"10px",}}>
         # of users     
            </Typography>
            
            </Grid>
            <Grid item xs={6}>
            <Typography  style={{color:"white",paddingTop:"0px",fontSize:"9px",paddingLeft:"0px",textAlign:"center"}}>
       per month(billed yearly)
            </Typography>
            </Grid >
            </Grid >
            <PrettoSlider
            ThumbComponent={AirbnbThumbComponent}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            style={{width:"200px",marginLeft:"20px",color:"white",maxHeight:"80px"}}
          />
          <Grid container >
          <Grid item
          xs={6} style={{paddingLeft:"20px"}}>
          <Typography style={{fontSize:"12px"}}>
            1
          </Typography>
          </Grid>
          <Grid item
          xs={6} style={{paddingLeft:"70px",}}>
          <Typography style={{fontSize:"12px"}}>
            200+
          </Typography>
          </Grid>
          </Grid>
          </Box>
        </Grid>
        <Card></Card>
      </Grid>
      </div>
    </div>

  );
}
  

export default App;
