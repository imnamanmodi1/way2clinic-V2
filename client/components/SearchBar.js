import React from 'react';
import '../src/Bulma.scss'

import '../components/styles/SearchBar.scss';


const Search = () => {
  return (
    <div className='search control has-icons-left'>
      <input class="input is-rounded si" type="text" placeholder="Search Anything" />
      <span class="icon is-small is-left">
        <i class="fas fa-search-location"></i>
      </span>
    </div>
  )
}

export default Search;