import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => ({
  buttons: {
    textTransform: "none",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "15px",
  },
}));

const ImgNavBar = (props) => {
  const classes = useStyles();
  const [clickButton, setClickButton] = useState("images");
  const param = props.location.pathname.slice(8);
  
  useEffect(()=>{
    if(param.length !== 0){
      setClickButton(param)
    }else{
      setClickButton("images")

    }
  },[param])

  const handleButtonClick = (event) => {
    const id = event.currentTarget.id;
    setClickButton(id);
    if (id === "images") {
      props.history.push("/images");
      return;
    }
    props.history.push("/images/" + id);
  };

  return (
    <center>
      <Button
        id="images"
        variant={clickButton === "images" ? "contained" : "outlined"}
        color={clickButton === "images" ? "primary" : "default"}
        className={classes.buttons}
        onClick={handleButtonClick}
      >
        General
      </Button>

      <Button
        id="facebook"
        variant={clickButton === "facebook" ? "contained" : "outlined"}
        color={clickButton === "facebook" ? "primary" : "default"}
        className={classes.buttons}
        onClick={handleButtonClick}
      >
        Facebook
      </Button>

      <Button
        id="twitter"
        variant={clickButton === "twitter" ? "contained" : "outlined"}
        color={clickButton === "twitter" ? "primary" : "default"}
        className={classes.buttons}
        onClick={handleButtonClick}
      >
        Twitter
      </Button>

      <Button
        id="linkedin"
        variant={clickButton === "linkedin" ? "contained" : "outlined"}
        color={clickButton === "linkedin" ? "primary" : "default"}
        className={classes.buttons}
        onClick={handleButtonClick}
      >
        Linkedin
      </Button>

      <Button
        id="pinterest"
        variant={clickButton === "pinterest" ? "contained" : "outlined"}
        color={clickButton === "pinterest" ? "primary" : "default"}
        className={classes.buttons}
        onClick={handleButtonClick}
      >
        Pinterest
      </Button>

      <Button
        id="instagram"
        variant={clickButton === "instagram" ? "contained" : "outlined"}
        color={clickButton === "instagram" ? "primary" : "default"}
        className={classes.buttons}
        onClick={handleButtonClick}
      >
        Instagram
      </Button>
    </center>
  );
};

export default withRouter(ImgNavBar);
