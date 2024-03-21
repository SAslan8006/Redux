import { createStore } from 'redux';
import NoteReducer from '../reducers/noteReducer';

const store = createStore(NoteReducer);

export default store;