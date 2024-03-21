export const ADD_NOTE = "ADD_NOTE";
export const SELECT_BUTTON = "SELECT_BUTTON";

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const selectButton = (buttonId) => ({
  type: SELECT_BUTTON,
  payload: buttonId,
});
