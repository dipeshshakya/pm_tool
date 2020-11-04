import React from 'react'
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper"
import TrelloCard from './TrelloCard';
function TrelloList({title}) {
    return (
<Container maxWidth="sm">
<Paper variant="outlined" square >

            {title} 
            <TrelloCard/>
            </Paper>

</Container>
    )
}

export default TrelloList
