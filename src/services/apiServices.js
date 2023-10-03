// src/services/apiService.js
export const fetchWordDetails = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching word details:', error);
      throw error;
    }
  };
  