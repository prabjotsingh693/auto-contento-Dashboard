import React, { useState, useEffect } from "react";
import { Typography, 
        Toolbar, 
        // Button 
      } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/navBar/navbar";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "10vh",
    color: "#c0c0c0",
  },
  exploreButton: {
    marginTop: "33px",
    // borderRadius: "0px",
    width: "330px",
    // height: "60px",
    // fontSize: "18px",
    backgroundColor: "#4fd0ac",
    "&:hover": {
      backgroundColor: "#4fd0ac",
    },
  },
  icon: {
    marginLeft: "21px",
  },
}));

const Welcome = (props) => {
  const [isAuth, setAuth] = useState(false);
  const [email, setEmail] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      const ff = localStorage.getItem("data");
      if (ff) {
        const data = JSON.parse(ff);
        if (data.token.length !== 0) {
          setAuth(true);
          setEmail(data.email.substring(0, data.email.indexOf("@")));
        }
      }
    }, 1000);
  }, []);

  return (
    <>
      <Navbar isAuth={isAuth} email={email} />
      <Toolbar />
      <div className={classes.root}>
        <center>
          {isAuth ? (
            <>
              <Typography variant="h3">Welcome</Typography>
              <Typography variant="h4">
                Content, in writing, is supreme.
              </Typography>
              {/* <Button
                variant="contained"
                
                className={classes.exploreButton}
                onClick={()=>props.history.push('/summary')}
              >
                Explore
                <ArrowForwardIosIcon className={classes.icon}/>
                
              </Button> */}
            </>
          ) : (
            <>
              <Typography variant="h3">You're not logged in</Typography>
              <Typography variant="h4">
                please use extension for Authentication
              </Typography>
            </>
          )}
        </center>
      </div>
    </>
  );
};

export default Welcome;
