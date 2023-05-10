import React, { useEffect, useContext } from 'react'
import LoginModal from './LoginModal'
import adoptionCartoon from '../Images/5516806.jpg'
import { FaRegGrinWink } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { UsersContextInstance } from '../context/UsersContext'
import { PetsContextInstance } from '../context/PetsContext'

const HomePage = () => {
  const { isLoggedIn, setIsLoggedIn, userDetails } = useContext(UsersContextInstance);
  const { fetchPets, addPet, deletePet } = useContext(PetsContextInstance);

  // useEffect(() => {
  //   // Update the document title using the browser API
  // }, [isLoggedIn]);

  // const handleDogFetch = async () => {
  //   const res = await fetch('https://dog.ceo/api/breeds/image/random');
  //   const data = await res.json();
  //   // console.log(data.message);
  //   setDogSrc(data.message);
  // }

  useEffect(() => {
    // handleDogFetch();
    userDetails.length ? console.log("userDetails",userDetails) : console.log("no user logged in")
  }, [userDetails]);

  return (
    <>
      {!isLoggedIn ?
        <div className='HomeLoggedOut'>
          <h1 className='Welcome'>Welcome to
            QuACK - the Quality Adoption Care and Kindness service
          </h1>
          <div className='AboutContainer'>
            <div className="About">
              <p>At QuACK, we are committed to matching the perfect pet with the perfect owner.</p>
              <p>Every animal deserves a loving home and every customer deserves a loyal friend, be it furry, slimy, feathery or scaly.</p>
              <p>On our website, feel free to browse over 50 adorable and friendly animals. Take your time and find the pet who is best for you.</p>
              <LoginModal {...{ isLoggedIn, setIsLoggedIn }} />
            </div>
            <img src={adoptionCartoon} alt="doggy" className="Img1" />
          </div>
        </div>
        :
        <div className="HomeLoggedIn">
          <h1 className='Welcome'>Welcome to
            QuACK, {userDetails.email}
          </h1>
          <p className="sillyDisclaimer"> (<FaRegGrinWink /> Don't worry, we won't tell anyone that your password is: {userDetails.password})</p>
          <div className='BtnsContainer'>
            <div className="BtnRow">
              <Button className="HomeBtn">My Pets</Button>
              <button className="HomeBtn">Profile</button>
            </div>
            <div className="BtnRow">
              <button className="HomeBtn">Search Pets</button>
              <button className="HomeBtn">Random Cute Animal Picture</button>
            </div>
            <div className="BtnRow">
              <button onClick={addPet}>Add Snake</button>
              {/* <button onClick={deletePet}>Delete a Snake</button> */}
              <button onClick={fetchPets}>See Pet List</button>
            </div>

            {/* <div className="About">
              <p>At QuACK, we are committed to matching the perfect pet with the perfect owner.</p>
            </div>
            <img src={adoptionCartoon} alt="doggy" className="Img1" /> */}
          </div>
        </div>
      }
    </>
  )
}

export default HomePage