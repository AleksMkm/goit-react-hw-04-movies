import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  state = {
    castIsShown: false,
    reviewsAreShown: false,
  };

  render() {
    const { movie } = this.props;

    return (
      <>
        {movie.status_code === 34 && <div>We have a problem</div>}
        <div>
          <div>Wow, a card!</div>
        </div>
      </>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
