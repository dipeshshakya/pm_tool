import React from 'react'
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper"
function TrelloList({title}) {
    return (
<Container maxWidth="sm">
<Paper variant="outlined" square >

            {title} 
            </Paper>

</Container>
    )
}

export default TrelloList
