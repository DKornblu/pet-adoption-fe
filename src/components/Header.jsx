import React from 'react'
import QuackIcon from './QuackIcon'
import white_duck from '../Images/white_duck.png'

const Header = ({searchInput, setSearchInput}) => {

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
        console.log(searchInput)
      }

    return (
        <header>
            <QuackIcon duckImg={white_duck} />
            <input type='search' name='search' placeholder="search" value={searchInput} onChange={handleSearchInput} />
        </header>
    )
}

export default Header