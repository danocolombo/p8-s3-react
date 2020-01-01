const initialState = {
    eventId: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_EVENT_ID':
            return {
                ...state,
                eventId: action.val
            }
        
    }
    return state;
};

export default reducer;