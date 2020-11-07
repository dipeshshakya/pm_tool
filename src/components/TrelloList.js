import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TrelloCard from "./TrelloCard";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    justifyContent: "center",
  },
}));
function TrelloList({ title, cards }) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" square>
        <h4 className={classes.heading}>{title} </h4>
        {cards.map((card) => (
          <TrelloCard text={card.text} />
        ))}
      </Paper>
    </Container>
  );
}

export default TrelloList;
