import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "#fff",
  },
  linkTag: {
    textDecoration: "none",
    color: "#fff",
  },

  btn: {
    color: "#ffffff",
  },
}));

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {loggedIn ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            ""
          )}

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.linkTag} to="/">
              WorkFlow
            </Link>
          </Typography>
          <Button color="inherit">
            {loggedIn ? (
              "Logout"
            ) : (
              <Link className={classes.linkTag} to="/login">
                Login
              </Link>
            )}
          </Button>
          {loggedIn ? (
            <Avatar>H</Avatar>
          ) : (
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
            >
              <Link className={classes.linkTag} to="/register">
                Register Now
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
