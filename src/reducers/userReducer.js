const initialState = {
    users: [
        {
            id: 0,
            name: "Doug"
        }
    ]
}

function reducer(state = initialState, action) {
    switch(action.type) {
        // case SOME_ACTION:
        //     do something   
        case "GET_USERS":
            return{
                ...state,
                users: action.payload
            }    
        default: 
            return state; 
    }
}
export default reducer;