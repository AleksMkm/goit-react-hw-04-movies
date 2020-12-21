import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  // const [castIsShown, setCastIsShown] = useState(false);
  // const [reviewsAreShown, setReviewsAreShown] = useState(false);

  return (
    <>
      {movie.status_code === 34 && <div>We have a problem</div>}
      <div>
        <div>Wow, a card!</div>
      </div>
    </>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
