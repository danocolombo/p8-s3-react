const initialState = {
    eventId: 0,
    rally: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_EVENT_ID':
            return {
                ...state,
                eventId: action.val
            }
        case 'SET_RALLY':
            return {
                ...state,
                rally: action.rally
            }
        
    }
    return state;
};
export default reducer;