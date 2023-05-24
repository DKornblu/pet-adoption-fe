import React, { useContext } from 'react'
import LoginModal from './LoginModal'
import adoptionCartoon from '../Images/5516806.jpg'
import { FaRegGrinWink } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { UsersContextInstance } from '../context/UsersContext'
import { PetsContextInstance } from '../context/PetsContext'

const HomePage = () => {
  const { token, currentUserName } = useContext(UsersContextInstance);
  const { petList, addPet, deletePet } = useContext(PetsContextInstance);
  const navigate = useNavigate();

  return (
    <>
    {/* TODO: should make sep comp for loggedin and loggedout, conditionally rendered based on token */}
      {!token ?
        <div className='HomeLoggedOut'>
          <h1 className='Welcome'>Welcome to
            QuACK - the Quality Adoption Care and Kindness service
          </h1>
          <div className='AboutContainer'>
            <div className="About">
              <p>At QuACK, we are committed to matching the perfect pet with the perfect owner.</p>
              <p>Every animal deserves a loving home and every customer deserves a loyal friend, be it furry, slimy, feathery or scaly.</p>
              <p>On our website, feel free to browse over 50 adorable and friendly animals. Take your time and find the pet who is best for you.</p>
              <LoginModal />
            </div>
            <img src={adoptionCartoon} alt="doggy" className="Img1" />
          </div>
        </div>
        :
        <div className="HomeLoggedIn">
          <h1 className='Welcome'>Welcome to
            QuACK, {currentUserName}
          </h1>
          <p className="sillyDisclaimer"> (Don't worry, we'll only share your info with some people <FaRegGrinWink />)</p>
          <button onClick={() => console.log('All pets: ', petList)}>Console Pet List</button>
          <div className='BtnsContainer'>
            <div className="BtnRow">
            <button className="HomeBtn" onClick={()=>navigate("/mypets")}> My Pets </button>
              <button className="HomeBtn" onClick={()=>navigate("/profile")}>Profile</button>
            </div>
            <div className="BtnRow">
              <button className="HomeBtn" onClick={()=>navigate("/search")}>Search Pets</button>
              <button className="HomeBtn" onClick={()=>navigate("/smile")}>Random Dog Pic</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default HomePage