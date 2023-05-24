import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap';
import { UsersContextInstance } from '../context/UsersContext';
import { useNavigate } from 'react-router-dom';

const PetCard = ({ pet }) => {
  const { token } = useContext(UsersContextInstance);

  const navigate = useNavigate();

  // TODO: card should display img, name, current status + see more button
  return (
    <>
      <Card style={{ width: '18rem' }} className='PetCard'>
        <Card.Img variant="top" src={pet.picture} alt='cute pic goes here' />
        <Card.Body>
          <Card.Title>Name: {pet.name}</Card.Title>
          <Card.Text>Status: {pet.adoptionStatus}</Card.Text>
          {token ?
            <>
              {/* <Card.Text>Type: {pet.type}</Card.Text>
              <Card.Text>Breed: {pet.breed}</Card.Text> */}
              <Button variant="primary"
                onClick={
                  () => navigate(`/pets/${pet.id}`)
                }
              >
                See More
              </Button>
            </>
            : null
          }
        </Card.Body>
      </Card>
    </>
  )
}

export default PetCard