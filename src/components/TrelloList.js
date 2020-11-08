import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TrelloCard from "./TrelloCard";
import { makeStyles } from "@material-ui/core/styles";
import TrelloActionButton from "./TrelloActionButton";
import { Card } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    justifyContent: "center",
  },
}));
function TrelloList({ title, cards }) {
  const classes = useStyles();

  return (
    <Container>
      <Paper variant="outlined" square>
        <h4 className={classes.heading}>{title} </h4>
        {cards.map((card) => (
          <TrelloCard key={card.id} text={card.text} />
        ))}

        <TrelloActionButton />
      </Paper>
    </Container>
  );
}

export default TrelloList;
