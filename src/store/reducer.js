const initialState = {
    eventId: 0,
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    eventNotes: "",
    eventStateRepName: "",
    eventStateRepEmail: "",
    eventStateRepPhone: "",
    venueName: "",
    venueStreet: "",
    venueCity: "",
    venueState: "",
    venueZipcode: "",
    venueMapLink: "",
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
                eventStartTime: action.eStart,
                eventEndTime: action.eEnd,
                eventNotes: action.eNotes,
                eventStateRepName: action.eStateRepName,
                eventStateRepEmail: action.eStateRepEmail,
                eventStateRepPhone: action.eStateRepPhone,
                venueName: action.vName,
                venueStreet: action.vStreet,
                venueCity: action.vCity,
                venueState: action.vState,
                venueZipcode: action.vZipcode,
                venueMapLink: action.vMapLink,
            }
        default:
    }
    return state;
};
export default reducer;