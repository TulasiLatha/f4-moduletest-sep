const initialState = {
    history: [],
    wordDetails: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_WORD_TO_HISTORY':
        return {
          ...state,
          history: [action.payload, ...state.history],
        };
      case 'FETCH_WORD_DETAILS':
        // Handle fetching word details and update state.wordDetails
        return state;
      default:
        return state;
    }
  };
export default rootReducer;  