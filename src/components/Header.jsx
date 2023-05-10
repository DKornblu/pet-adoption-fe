import React, { useContext } from 'react'
import QuackIcon from './QuackIcon'
import white_duck from '../Images/white_duck.png'
import SearchModal from './SearchModal'
import { Button } from 'react-bootstrap';
import { UsersContextInstance } from '../context/UsersContext'
import { FiLogOut } from 'react-icons/fi';


const Header = () => {
    const { isLoggedIn, setIsLoggedIn, setUserDetails } = useContext(UsersContextInstance);

    const handleLogOut = () => {
        setUserDetails({})
        setIsLoggedIn(false)
    }

    return (
        <header>
            <QuackIcon duckImg={white_duck} />
            {isLoggedIn &&
                <Button style={{ backgroundColor: 'transparent', border: '1px solid white' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleLogOut}> Log Out <FiLogOut /> </Button>}
            {!isLoggedIn && <SearchModal className="SearchModal" />}
        </header >
    )
}

export default Header