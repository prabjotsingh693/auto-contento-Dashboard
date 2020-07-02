import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,

} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.root}>
            Auto Content
          </Typography>
          
          <Typography variant="h6" noWrap>
            {props.isAuth ? props.email : 'login '}
          </Typography>
          &nbsp; &nbsp;
          <AccountCircleIcon />
        </Toolbar>
      </AppBar> 
      
      </div>    
  );
};

export default NavBar;
