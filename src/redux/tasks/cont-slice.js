import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  contacts: [],
  filter: "",
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState.contacts,
    reducers: {
        addContact: {
            reducer: (state, { payload }) => { state.push(payload) },
            prepare: (item) => ({id: nanoid(), ...item})
        },
        deleteContact: (state, { payload }) => state.filter(({id}) => id !== payload)
    }
})


export default contactsSlice.reducer;