import axios from 'axios';

export const fetchSearchingMovies = async query => {
  const {
    data: { results },
  } = await axios('/search/movie', {
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
      query,
    },
  });
  return results;
};
