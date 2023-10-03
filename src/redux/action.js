
export const addWordToHistory = (word) => ({
    type: 'ADD_WORD_TO_HISTORY',
    payload: word,
  });
  
  export const fetchWordDetails = (word) => ({
    type: 'FETCH_WORD_DETAILS',
    payload: word,
  });
  
  