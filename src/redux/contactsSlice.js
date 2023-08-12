import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactList: [] },
  reducers: {
    addContact(state, action) {
      state.contactList.push(action.payload);
    },
    deleteContact(state, action) {
        state.contactList = state.contactList.filter(contact => contact.id !== action.payload.id)
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;