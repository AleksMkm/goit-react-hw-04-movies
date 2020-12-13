import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './SearchForm.module.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.btn = React.createRef();
  }

  state = {
    value: '',
  };

  handleInput = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = this.state.value.toLowerCase().trim();
    if (query === '') {
      toast.error('Please enter a query');
      this.btn.current.blur();
      return;
    }
    this.props.getSearchQuery(query);
    this.setState({ value: '' });
    this.btn.current.blur();
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.btn} ref={this.btn}>
            Search
          </button>

          <input
            className={s.input}
            type="text"
            value={this.state.value}
            placeholder="Search movies"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default SearchForm;

SearchForm.propTypes = {
  getSearchQuery: PropTypes.func.isRequired,
};
