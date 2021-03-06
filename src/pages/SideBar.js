import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import AddIcon from "@material-ui/icons/Add";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    minHeight: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
function SideBar() {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        //   subheader={
        //     <ListSubheader component="div" id="nested-list-subheader">
        //       Nested List Items
        //     </ListSubheader>
        //   }
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Project" />
        </ListItem>
      </List>
    </Container>
  );
}
export default SideBar;
