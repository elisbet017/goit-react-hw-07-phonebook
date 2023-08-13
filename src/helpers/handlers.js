export const handlePending = state => {
  state.isLoading = true;
};

export const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleGetAllContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};
export const handleAddContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = null;
};

export const handleDeleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== payload.id);
  state.error = null;
};
