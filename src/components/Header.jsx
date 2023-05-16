import React, { useContext } from 'react'
import QuackIcon from './QuackIcon'
import white_duck from '../Images/white_duck.png'
import SearchModal from './SearchModal'
import { Button } from 'react-bootstrap';
import { UsersContextInstance } from '../context/UsersContext'
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const { token, setToken, setUserDetails, setCurrentUserName } = useContext(UsersContextInstance);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.setItem("token", '')
        localStorage.setItem("currentName", '')
        setUserDetails({})
        setToken('')
        setCurrentUserName('')
        navigate("/")
    }

    return (
        <header>
            <QuackIcon duckImg={white_duck} />
            {token ?
                <Button style={{ backgroundColor: 'transparent', border: '1px solid white' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleLogOut}>
                    Log Out <FiLogOut style={{fontSize: '1.25rem'}}/>
                </Button>
                :
                <SearchModal className="SearchModal" />}
        </header >
    )
}

export default Header