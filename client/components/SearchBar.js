import React from 'react';
import '../src/Bulma.scss';
import '../components/styles/SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons/faSearch'


const Search = () => {
  return(
    <div className='search'>
      {/* <FontAwesomeIcon icon='faSearch' />, */}
      <input class="input is-rounded si" type="text" placeholder="Search Anything"></input>
    </div>
  )
}

export default Search;