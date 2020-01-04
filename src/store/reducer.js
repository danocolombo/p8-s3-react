const initialState = {
    eventId: 0,
    eventDate: "",
    eventStart: "",
    eventEnd: "",
    eventNotes: "",
    venueName: "",
    venueStreet: "",
    venueCity: "",
    venueState: "",
    venueZipcode: "",
    venueContact: "",
    venueEmail: "",
    venuePhone: "",
    venueMapLink: "",
    stateRepName: "",
    stateRepEmail: "",
    stateRepPhone: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_EVENT_ID':
            return {
                ...state,
                eventId: action.val
            }
        case 'SET_EVENT_DATE':
            return {
                ...state,
                eventDate: action.val
            }
        case 'SET_EVENT_DETAILS':
            return {
                ...state,
                eventDate: action.eDate,
                eventStart: action.eStart,
                eventEnd: action.eEnd,
                eventNotes: action.eNotes,
                venueName: action.vName,
                venueStreet: action.vStreet,
                venueCity: action.vCity,
                venueState: action.vState,
                venueZipcode: action.vZipcode,
                venueContact: action.vContact,
                venueEmail: action.vEmail,
                venuePhone: action.vPhone,
                venueMapLink: action.mapLink,
                stateRepName: action.stateRepName,
                stateRepEmail: action.stateRepEmail,
                stateRepPhone: action.stateRepPhone
            }
        
    }
    return state;
};
export default reducer;