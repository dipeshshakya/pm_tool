import React from 'react'
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin:20
    },
  
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
function TrelloCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        
      </CardContent>
      
    </Card>
    )
}

export default TrelloCard
