import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import SideBar from "./SideBar";
import Header from "../components/Header";
import TrelloList from "../components/TrelloList";
import { connect } from "react-redux";
// import {useSelector} from "react-redux"

class Dashboard extends Component {
  render() {
    const { lists } = this.props;

    return (
      <>
        <Header />
        <Grid>
          <Grid item xs={3} sm={3}>
            <SideBar />
            {lists.map((list) => (
              <TrelloList title={list.title} cards={list.cards} />
            ))}
          </Grid>
          <Grid item xs={9} sm={9}></Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(Dashboard);
