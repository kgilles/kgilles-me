const initialState = {
  text: 'Hello World!'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

export default reducer;
