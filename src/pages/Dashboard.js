import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SideBar from "./SideBar";
import Header from "../components/Header";
import TrelloList from "../components/TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "../components/TrelloActionButton";

class Dashboard extends Component {
  render() {
    const { lists } = this.props;

    return (
      <>
        <Header />
        <Grid style={{ marginTop: "20px" }}>
          <Grid
            item
            xs={12}
            sm={4}
            style={{
              display: "flex",
              flexDirection: "row",
              borderRadius: "3px",
              width: "100%",
            }}
          >
            {lists.map((list) => (
              <TrelloList key={list.id} title={list.title} cards={list.cards} />
            ))}

            <TrelloActionButton list />
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(Dashboard);
