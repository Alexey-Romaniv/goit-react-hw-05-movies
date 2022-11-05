import axios from 'axios';
import { transformData } from '../helpers/transformData';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const response = await axios('/trending/movie/day', {
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
    },
  });
  return transformData(response.data.results);
};
