import React from 'react';

const Search = ({searchHandler}) => (
    <div className="header__search">
      <input placeholder="Search here..." type="text" className="input-field" onChange={searchHandler}/>
    </div>
);

export default Search;