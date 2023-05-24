import React, { useContext } from 'react'
import QuackIcon from './QuackIcon'
import white_duck from '../Images/white_duck.png'
import SearchModal from './SearchModal'
import { Button } from 'react-bootstrap';
import { UsersContextInstance } from '../context/UsersContext'
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const { token, setToken, setUserDetails, setCurrentUserName, setCurrentUserId, isAdmin, setIsAdmin } = useContext(UsersContextInstance);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.setItem("token", '')
        localStorage.setItem("currentId", '')
        localStorage.setItem("currentName", '')
        setUserDetails({})
        setToken('')
        setCurrentUserId('')
        setCurrentUserName('')
        setIsAdmin(0)
        navigate("/")
    }

    return (
        <header>
            <button onClick={() => navigate(`/`)}>
                <QuackIcon duckImg={white_duck} />
            </button>
            {token && isAdmin ?
                <>
                    <Button style={{ backgroundColor: 'transparent', border: '1px solid white' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} onClick={() => navigate(`/admin`)}>
                        Admin Dashboard
                    </Button>
                    <Button style={{ backgroundColor: 'transparent', border: '1px solid white' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} onClick={() => navigate(`/addpet`)}>
                        Add Pet
                    </Button>
                </>
                : null}
            {token ?
                <Button style={{ backgroundColor: 'transparent', border: '1px solid white' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleLogOut}>
                    Log Out <FiLogOut style={{ fontSize: '1.25rem' }} />
                </Button>
                :
                <SearchModal className="SearchModal" />}
        </header >
    )
}

export default Header