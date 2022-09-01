import React from 'react'

import './SearchInput_Style.css'

const SearchInput = ({ onChange }) => {
  return (
    <div className='search-input-wrapper'>
        <input placeholder='Cari Catatan' className='search-input' type="text" onChange={onChange}/>
    </div>
  )
}

export default SearchInput