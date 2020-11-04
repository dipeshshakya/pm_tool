cosnt initialState = [

    {        
    title : "Lasst episode",
    id:0,
    cards:[
        {
        id:0,
        text:"this first text sample",

        },
        {
            id:0,
            text:"this first text sample",
    
        }
            


    ]

}

    
];

const ListReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;

    }
}

export default ListReducer;
