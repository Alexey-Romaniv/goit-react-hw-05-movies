import axios from 'axios';

export const FetchCast = async id => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
    },
  });
  return cast;
};
