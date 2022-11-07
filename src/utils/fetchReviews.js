import axios from 'axios';

export const FetchReviews = async id => {
  const {
    data: { results },
  } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
    },
  });
  return results;
};
