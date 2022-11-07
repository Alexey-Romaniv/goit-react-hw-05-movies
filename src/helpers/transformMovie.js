export const transformMovie = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  const genresName = genres.map(({ name }) => name).join(', ');
  return {
    poster_path,
    title,
    vote_average,
    overview,
    genresName,
  };
};
