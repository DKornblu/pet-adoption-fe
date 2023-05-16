import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { UsersContextInstance } from '../context/UsersContext';

const PetCard = ({ pet }) => {
  const { token } = useContext(UsersContextInstance);

  // TODO: card should display img, name, current status + see more button
  return (
    <div className='PetCard'>
      <img src={pet.Picture} alt="" className="PetImg" />
      <div className="PetName">Name: {pet.name}</div>
      <div className="PetStatus">Status: {pet.adoptionStatus}</div>

      {!token ? null :
        <>
          <div className="PetBreed">Breed: {pet.breed}</div>
          <div className="PetType">Type: {pet.type}</div>
          <Button> See More </Button>
        </>
      }
    </div>
  )
}

export default PetCard