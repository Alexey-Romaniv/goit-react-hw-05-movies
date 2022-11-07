import axios from 'axios';
import { transformMovie } from '../helpers/transformMovie';

export const fetchMovie = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
    },
  });
  const movie = transformMovie(data);
  return movie;
};
