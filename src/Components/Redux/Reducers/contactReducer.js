const initialState = [
    {
        id: 0,
        name: "Ali A. Khokhar",
        number: "0323-69xxxx4",
        email: "aliekhokhar@hotmail.com"
    },
    {
        id: 1,
        name: "Abdullah",
        number: "0320-15xxxx2",
        email: "abdullah1122@gmail.com"
    }
]

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;

        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
            state = updateState;
            return state;

        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;

        default: return state
    }
}

export default contactReducer