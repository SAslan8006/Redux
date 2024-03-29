const initialState = {
    data: null,
    text: '2',
    isHtml: false
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'SET_TEXT':
        return { ...state, text: action.payload };
      case 'SET_IS_HTML':
        return { ...state, isHtml: action.payload };
      default:
        return state;
    }
  }
export default rootReducer;