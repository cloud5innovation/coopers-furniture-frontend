import React, {useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "./../../Components/Home/Carousel";
import { getProducts } from "./../../Store/Actions/products";
// Material UI breakpoints
// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#0C1D33",
    // border: "10px solid purple",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  main: {
    // border: "1px solid red",
    margin: "2rem 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "4rem",
    margin: "2rem",
    color: "#0C1D33",
    textTransform: "uppercase",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: 1.5
    },
  },
  paragraph: {
    // border: "1px solid green",
    textAlign: "justify",
    width: "70%",
    lineHeight: 2,
    [theme.breakpoints.down('sm')]: {
      width: "90%",
    },
  },
  howItWorks: {
    backgroundColor: "#F2CC7E",
    color: "#366E82",
    width: "100%",
    margin: "2rem 0",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "2rem",
  },
  span: {
    transform: "rotate(180deg)",
    width: "15%", 
    // border: "1px solid white",
    fontSize: "1rem",
    backgroundColor: "#366E82",
    height: "10px",
  },
  steps: {
    // border: "1px solid orange",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    margin: "2rem 0",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
  },
  step: {
    // border: "1px solid purple",
    width: "25%",
    // maxWidth: "25%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    },
  },
  stepNum: {
    fontSize: "6rem",
    // border: "2px solid red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "65%",
    margin: "0 auto 2rem auto",  
},
num: {
  fontSize: "6rem"
},
stepHeader: {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#366E82",
  borderBottom: "3px solid #EA4D1F",
  width: "80%",
  margin: "0 auto"
},
stepText: {
  textTransform: "none",
  margin: "2rem auto",
  textAlign: "justify",
  width: "80%"
},
listItem: {
  width: "100%",
  // border: "1px solid red",
  padding: 0
},
listItemText: {
  width: "100%",
  // border: "1px solid green",
  listStyle: "none"
},
divider: {
  width: "100%", 
  color: "#EA4D1F",
  // marginTop: "1rem", 
},
section: {
  // color: "#366E82",
  width: "100%",
  margin: "2rem 0",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexDirection: "column",
  paddingTop: "2rem",
},
hotItem: {
  // border: "1px solid purple",
  width: "100%",
  height: "auto",
  // maxWidth: "25%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down('sm')]: {
    width: "100%"
  },
},
image: {
  width: "50%",
  // border: "1px solid yellow",

},
hotItemSection: {
  // border: "1px solid orange",
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  margin: "2rem 0",
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
},
title: {
  margin: "1rem 0"
},
link: {
  textDecoration: "none",
  color: "#0C1D33"
},
hotItemTitle: {
  paddingLeft: "1rem",
  [theme.breakpoints.down('sm')]: {
    alignSelf: "center"
  },
}
}));
const Home = (props) => {
  const classes = useStyles();
  const products = useSelector(state => state.product.products);
  console.log("home products", products);
  const dispatch = useDispatch();

  useEffect(() => {
    {props.match.path === "/" ?  dispatch(getProducts())
    :  console.log("not home")}

    return () => {
      console.log("unsubscribe")
    }
  },[dispatch, props.match.path]);

    return (
        <Grid className={classes.root}>
          <Carousel/>
          <Grid container className={classes.main}>
            <Typography className={classes.heading} component="h1" variant="h1">Welcome to Cooper's Home Furniture</Typography>
            <Typography className={classes.paragraph} component="p" variant="p">
              We pride ourselves on  providing fast, affordable and reliable furniture across Central Texas.
              We believe that leasing furniture should be a thing of the past. Our financing option are hassle free, and owning your furniture outright is easy with us.  Currently we service the following areas, the Greater Austin area, Huston, Killeen, and Waco with plans to expand into more cities  in the up coming months. 
            </Typography>

            <Grid item className={classes.howItWorks}>
              <Typography component="h2" variant="h2">How We Work</Typography>
              <Grid className={classes.steps}>
                <Grid className={classes.step}>
                  <Grid className={classes.stepNum}>
                <span className={classes.span}></span>
                  <Typography  className={classes.num} component="body1" varient="body1">1</Typography>
                  <span className={classes.span}></span>
                  </Grid>
                  <Typography style={{minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center"}} className={classes.stepHeader} component="h3" varient="h3">Select Your Furniture</Typography>
                  <Typography className={classes.stepText} component="body1" variant="body1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla placerat, finibus arcu eget, porttitor mauris. Sed a hendrerit ipsum, vel laoreet orci. Praesent ac dolor ac augue sagittis tincidunt eget quis sem.</Typography>                      
                </Grid>
                <Grid className={classes.step}>
                <Grid className={classes.stepNum}>
                <span className={classes.span}></span>
                  <Typography  className={classes.num} component="body1" varient="body1">2</Typography>
                  <span className={classes.span}></span>
                  </Grid>  
                  <Typography className={classes.stepHeader} component="h3" varient="h3">Add your items to your Cart and proceed to booking</Typography>  
                  <Typography className={classes.stepText} component="body1" variant="body1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla placerat, finibus arcu eget, porttitor mauris. Sed a hendrerit ipsum, vel laoreet orci. Praesent ac dolor ac augue sagittis tincidunt eget quis sem.</Typography>                      
                  </Grid>
                <Grid className={classes.step}>
                <Grid className={classes.stepNum}>
                <span className={classes.span}></span>
                  <Typography  className={classes.num} component="body1" varient="body1">3</Typography>
                  <span className={classes.span}></span>
                  </Grid> 
                  <Typography className={classes.stepHeader} component="h3" varient="h3">receive confirmation of order </Typography>     
                  <Typography className={classes.stepText} component="body1" variant="body1">We will then provide you with available delivery slots, in most cases we can deliver the very  next day. You pay for your product on delivery with either cash or card. </Typography>          
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.section}>
              <Typography className={classes.hotItemTitle} component="h2" variant="h2">hot deals</Typography>
              <Grid className={classes.hotItemSection}>
                {products.slice(0, 3).map((product, key) => (
                  //  <Link className={classes.link} to={`/product/?col=id&filter=${produ.id}`}>
                    <Grid className={classes.hotItem} >
                      <img className={classes.image} src={product.image_url} alt={product.title}/>
                      <Typography variant="button" display="block" className={classes.title}>{product.title}</Typography>
                    </Grid>
                // </Link> 
                ))}
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
};

export default withRouter(Home);