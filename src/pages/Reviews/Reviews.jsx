import { useFetchReviews } from 'hooks/useFetchReviews';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { reviews, isLoading, error } = useFetchReviews();
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops! Something wrong</p>}
      {reviews?.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We don`t have any reviews for this movie</h3>
      )}
    </>
  );
};
