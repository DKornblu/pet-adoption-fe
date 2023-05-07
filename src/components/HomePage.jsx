import React, { useState, useEffect, useContext } from 'react'
import LoginModal from './LoginModal'
import PetList from './PetList';
import adoptionCartoon from '../Images/5516806.jpg'
import { UsersContextInstance } from '../context/UsersContext'

const HomePage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UsersContextInstance);
  // const handleDogFetch = async () => {
  //   const res = await fetch('https://dog.ceo/api/breeds/image/random');
  //   const data = await res.json();
  //   // console.log(data.message);
  //   setDogSrc(data.message);
  // }

  // useEffect(() => {
  //   handleDogFetch();
  // }, []);

  return (
    <>
      <div className='Home'>
        {/* <div className="headerSpace"></div> */}
        <h1 className='Welcome'>Welcome to
          QuACK - the Quality Adoption Care and Kindness service
        </h1>
        <div className='AboutContainer'>
          <div className="About">
            <p>At QuACK, we are committed to matching the perfect pet with the perfect owner.</p>
            <p>Every animal deserves a loving home and every customer deserves a loyal friend, be it furry, slimy, feathery or scaly.</p>
            <p>On our website, feel free to browse over 50 adorable and friendly animals. Take your time and find the pet who is best for you.</p>
            <LoginModal {...{isLoggedIn, setIsLoggedIn}} />
          </div>
          <img src={adoptionCartoon} alt="doggy" className="Img1" />
        </div>
      </div>
      {/* <div className="PetListContainer">
        <PetList />
      </div> */}
    </>
  )
}

export default HomePage