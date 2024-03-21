import { ADD_NOTE, SELECT_BUTTON } from "../actions/Noteactions";
const initialState = {
  notes: [],
  lastClickedButton: null,
};

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case SELECT_BUTTON:
      return {
        ...state,
        lastClickedButton: action.payload,
      };
    default:
      return state;
  }
};

export default NoteReducer;
