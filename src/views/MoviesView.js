import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';

export default function SearchMoviesView() {
  const [query, setQuery] = useState('');

  return <SearchForm getSearchQuery={query => setQuery(query)} />;
}

// showSearchResults = nextQuery => {
//   this.setState({ status: Status.PENDING });
//   moviesAPI
//     .getSearchData(nextQuery)
//     .then(data => {
//       console.log(data);
//       if (data.total_results === 0) {
//         this.setState({ status: Status.REJECTED });
//         return;
//       }
//       this.setState({ movies: data.results, status: Status.RESOLVED });
//     })
//     .catch(error => this.setState({ status: Status.REJECTED }));
// };
