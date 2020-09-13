import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: "20px",
  },
  containerWrapper: {
    paddingTop: "50px",
  },
}));
function Home() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container>
        <Grid
          className={classes.containerWrapper}
          container
          direction="row"
          alignItems="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" component="h2">
              Manage your project from the multiple platform{" "}
            </Typography>
            <Button
              className={classes.btn}
              variant="outlined"
              color="secondary"
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/design-driven-illustration-2x.png"
              alt="pm"
              width="550"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
