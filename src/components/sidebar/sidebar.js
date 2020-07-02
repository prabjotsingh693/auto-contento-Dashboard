import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#f9f9f9'
  },
  drawerContainer: {
    overflow: "auto",
    
  },
}));

const SideBar = (props) => {
  const classes = useStyles();
  // const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem button >
                <ListItemText primary={'Summary'} />
              </ListItem>
              <Divider/>
              <ListItem button>
                <ListItemText primary={'Classification'} />
              </ListItem>
              <Divider/>
          </List>
          
        </div>
      </Drawer>
  );
};

export default SideBar;
