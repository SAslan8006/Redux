export const setData = data => ({
    type: 'SET_DATA',
    payload: data
  });
  
  export const setText = text => ({
    type: 'SET_TEXT',
    payload: text
  });
  
  export const setIsHtml = isHtml => ({
    type: 'SET_IS_HTML',
    payload: isHtml
  });