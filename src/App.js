import React, { Component } from 'react';
import Container from './Components/Container';
import Header from './Components/Header';

const INITIAL_STATE = {
  homepage: true,
  searchQuery: '',
  movies: null,
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleNav = () => {
    this.setState(prevState => ({
      homepage: !prevState.homepage,
    }));
  };

  render() {
    return (
      <Container>
        <Header changeView={this.handleNav} />
        <div>movies? movies!</div>
      </Container>
    );
  }
}

export default App;
