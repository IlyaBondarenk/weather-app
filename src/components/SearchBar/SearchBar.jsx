import React from 'react'

const SearchBar = ({query, setQuery, search}) => {
  return (
    <div>
      <input
        type='text'
        className='search-bar'
        placeholder='Enter the city...' 
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onKeyPress={search}
        />
    </div>
  )
}

export default SearchBar

