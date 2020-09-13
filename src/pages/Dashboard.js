import React from "react";
import Grid from "@material-ui/core/Grid";
import SideBar from "./SideBar";
import Header from "../components/Header";

function Dashboard() {
  return (
    <>
      <Header />
      <Grid>
        <Grid item xs={3} sm={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9} sm={9}></Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
